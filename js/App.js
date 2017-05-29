import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRedirect } from 'react-router'
import TestsList from './components/quiz/TestsList'
import QuestionHolder from './components/quiz/QuestionHolder'
import ReviewQuestionHolder from './components/quiz/ReviewQuestionHolder'
import TestsLayout from './components/quiz/TestsLayout'
import store from './components/quiz/store'
import QnA from './components/quiz/QnA'
import TestOver from './components/quiz/TestOver'
import SeenAllQuestions from './components/quiz/SeenAllQuestions'
import NoMatch from './components/quiz/NoMatch'
import ReviewTest from './components/quiz/ReviewTest'
import SectionTimeEnded from './components/quiz/SectionTimeEnded'
import SectionBreak from './components/quiz/SectionBreak'
import SectionInstructions from './components/quiz/SectionInstructions'
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
              <Route path='tests/:id/:sectionId/sectionInstructions' component={SectionInstructions} />
              <Route path='tests/:id/:sectionId/:qId' component={QuestionHolder} />
              <Route path='tests/review/:id/:sectionId/:qId' component={ReviewQuestionHolder} />
              <Route path='seenAllQs' component={SeenAllQuestions} />
              <Route path='sectionTimeEnded' component={SectionTimeEnded} />
              <Route path='sectionBreak' component={SectionBreak} />
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
