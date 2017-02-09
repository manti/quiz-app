import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import TestsList from './components/quiz/TestsList'
import Landing from './components/quiz/Landing'
import QuestionHolder from './components/quiz/QuestionHolder'
import TestsLayout from './components/quiz/TestsLayout'
import store from './components/quiz/store'
import QnA from './components/quiz/QnA'
import { Provider } from 'react-redux'
require ('./site.css')

const App = React.createClass({
  render () {
    return (
      <div className='container'>
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route component={TestsLayout}>
              <Route path='/' component={Landing} />
              <Route path='tests' component={TestsList} />
              <Route path='tests/:id' component={QnA} />
              <Route path='tests/:id/:qId' component={QuestionHolder} />
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
