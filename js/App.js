import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match, Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import TestsList from './components/quiz/TestsList'
import Landing from './components/quiz/Landing'
import BackAndForth from './components/quiz/BackAndForth'
import QuestionHolder from './components/quiz/QuestionHolder'
import store from './components/quiz/store'
import QnA from './components/quiz/QnA'
import { Provider } from 'react-redux'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <Provider store={store}>
          {/* Change to HashRouter if not using webpack dev server */}
          <div className='container'>
            <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to='/' className='brand-link'>
                    GREOnline.in
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Navbar>
            <BackAndForth />
            <Match exactly pattern='/' component={Landing} />
            <Match exactly pattern='/tests' component={TestsList} />
            <Match exactly pattern='/tests/:id' component={QnA} />
            <Match exactly pattern='/tests/:id/:qId' component={QuestionHolder} />
          </div>
        </Provider>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
