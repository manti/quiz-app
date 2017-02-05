from flask import Flask, redirect, url_for, session, render_template, g, flash
import pyrebase
from flask_oauth import OAuth
import requests
import json
from flask import jsonify
from functools import wraps
import MySQLdb as mdb
from quiz.views.institute import Institute
from quiz.views.users import Users

import os 

from firebase_token_generator import create_token


app = Flask('quiz')
app.config.from_object('quiz.settings')

firebase = pyrebase.initialize_app(app.config['FIREBASE_CONFIG'])

app.debug = app.config['DEBUG']
app.secret_key = app.config['SECRET_KEY']
app.db = firebase.database()
oauth = OAuth()
GOOGLE_CLIENT_ID = app.config['GOOGLE_CLIENT_ID']
GOOGLE_CLIENT_SECRET = app.config['GOOGLE_CLIENT_SECRET']

app.app_path = os.path.dirname(__file__)


REDIRECT_URI = app.config['REDIRECT_URI']  # one of the Redirect URIs from Google APIs console
# USERINFO_URL = a
ALLOWED_HD = app.config['ALLOWED_HD']

google = oauth.remote_app('google',
                          base_url='https://www.google.com/accounts/',
                          authorize_url='https://accounts.google.com/o/oauth2/auth',
                          request_token_url=None,
                          request_token_params={'scope': 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
                                                'response_type': 'code'},   #, 'hd': 'domain.com'},  # set HD to control the domain used
                          access_token_url='https://accounts.google.com/o/oauth2/token',
                          access_token_method='POST',
                          access_token_params={'grant_type': 'authorization_code'},
                          consumer_key=GOOGLE_CLIENT_ID,
                          consumer_secret=GOOGLE_CLIENT_SECRET)

DB_HOST = app.config['DB_HOST']
DB_USER = app.config['DB_USER']
DB_PASS = app.config['DB_PASS']
DB_NAME = app.config['DB_NAME']

def check_login(f):
  @wraps(f)
  def decorated_function(*args, **kwargs):
    if session.get('access_token') is None:
      return redirect(url_for('login'))
    return f(*args, **kwargs)
  return decorated_function

def authorize(func):
    @wraps(func)
    def authorize_and_call(*args, **kwargs):
      email = session.get('email')
      admin_users = app.db.child("admin").get()
      print admin_users.val()
      if (admin_users.val()) < 1:
          raise Exception('Unauthorized Access!')
      return func(*args, **kwargs)
    return authorize_and_call

@app.route('/index')
@check_login
def index():
  user = Users()
  return jsonify(user.get_users_data_by_id(session.get('user_id')))



@app.route('/login')
def login():

  callback=url_for('authorized', _external=True)
  return google.authorize(callback=callback)

@app.route('/logout')
def logout():

  session.pop('access_token', None)
  session.pop('user_id', None)
  session.pop('name', None)
  return jsonify(sucess=True)


@app.route(REDIRECT_URI)
@google.authorized_handler
def authorized(resp):
  response = {}
  session['access_token'] = access_token = resp['access_token']

  if access_token is not None:
    
    headers = {'Authorization': 'OAuth %s' % access_token}

    r = requests.get("https://www.googleapis.com/oauth2/v1/userinfo", headers=headers)


    if r.status_code != 200:
      response['error'] = "Failed in open id "

      return redirect(url_for('logout'))
    
    else:
    
      userinfo = json.loads(r.content)
      g.db_cur.execute("select * from users where email = %(email)s;", { "email": userinfo['email'] })
      check_user = g.db_cur.fetchone()
      
      session['user_id'] = userinfo['id']
      session['name'] = userinfo['name']
      session['email'] = userinfo['email']

      if check_user is not None:

        g.db_cur.execute("update users set access_token = %(access_token)s where email = %(email)s;", { "access_token": access_token, "email": check_user['email'] })
        g.db_con.commit()
      
      else:

        create_user(userinfo)
        g.db_cur.execute("insert into users(name, email, pictureurl, hd, access_token) values(%(name)s, %(email)s, %(pictureurl)s, %(hd)s, %(access_token)s);", \
          { 'name': userinfo['name'], 'email': userinfo['email'], 'pictureurl': userinfo['picture'], 'hd': userinfo['id'], 'access_token': access_token })
        g.db_con.commit()

      user = Users()

      user_data = user.get_users_data_by_id(userinfo['id'])
      user.initialise_test(user_data.items()[0][0])
      
      return redirect(url_for('index'))


@app.route('/report')
@check_login
def index():
  user = Users()
  user.generate_report(session.get('user_id'))
  return jsonify(user.get_users_data_by_id(session.get('user_id')))



@google.tokengetter
def get_access_token():
    return session.get('access_token')



def connect_db():
  return mdb.connect(DB_HOST, DB_USER, DB_PASS, DB_NAME)

@app.before_request
def before_req():

  g.db_con = connect_db()
  g.db_cur = g.db_con.cursor(mdb.cursors.DictCursor)
  #g.db = connect_db()

@app.teardown_request
def teardown_req(exception):
  db = getattr(g, 'db', None)
  if db is not None:
    db_cur.close()

def create_user(userinfo):
  institute = Institute()
  user_role= institute.check_user_status(userinfo['email'])
  user = Users()
  user.add_users(dict(userinfo.items() + user_role.items()))



