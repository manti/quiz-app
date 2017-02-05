from flask import current_app as app


class Institute():

    def get_institue_users(id):
        
        institute_data = app.db.child("institutes").get()

        return jsonify(institute_data)

    def check_user_status(self, email):
        institutes = app.db.child("institutes").get()


        found = False
        data = { 
                    "institute_id": "",
                    "role": "user",
                    "allowed": False
                }
        for institute in institutes.each():
            if email in institute.val()['admins']:
                found = True
                data['institute_id'] = institute.val()['id']
                data['role'] = 'admin'
                data['allowed'] = True
        if not found:
            for institute in institutes.each():
                if email in institute.val()['registered_users']:
                    found = True
                    data['institute_id'] = institute.val()['id']
                    data['allowed'] = True
        print data
        return data

    def check_user_belong_to_inst_admin(self, email):
        institutes = app.db.child("institutes").get()
        

    

    def add_users_to_institute(users_data, institute_id):
        db.child("users").child("Morty").update({"name": "Mortiest Morty"})
        

        return jsonify(self.get_users_data(users_data['email']))
    
    def add_admin_to_institute(useremail):
        
        return True

    def remove_admin_to_institute(email, institute_id):
        
        return True
    
    def unlink_user_to_institute(email, institute_id):

        return True

    def generate_report(email):

        return True