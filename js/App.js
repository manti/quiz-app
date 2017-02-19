import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import TestsList from './components/quiz/TestsList'
import QuestionHolder from './components/quiz/QuestionHolder'
import TestsLayout from './components/quiz/TestsLayout'
import store from './components/quiz/store'
import QnA from './components/quiz/QnA'
import TestOver from './components/quiz/TestOver'
import NoMatch from './components/quiz/NoMatch'
import ReviewTest from './components/quiz/ReviewTest'
import { Provider } from 'react-redux'
// require('./site.css')

const App = React.createClass({
  render () {
    return (
      <div className='container'>
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route component={TestsLayout}>
              <Route path='tests' component={TestsList} />
              <Route path='tests/:id' component={QnA} />
              <Route path='tests/review/:id' component={ReviewTest} />
              <Route path='tests/:id/over' component={TestOver} />
              <Route path='tests/:id/:sectionId/:qId' component={QuestionHolder} />
              <IndexRedirect to='/tests' />
              <Route path='*' component={NoMatch} />
            </Route>
          </Router>
        </Provider>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
