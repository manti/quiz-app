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
import TestRegulations from './components/quiz/TestRegulations'
import TestTimingAndBreak from './components/quiz/TestTimingAndBreak'
import TestInfo from './components/quiz/TestInfo'
import Disclaimer from './components/quiz/Disclaimer'
import CopyRight from './components/quiz/CopyRight'
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
              <Route path='testTimingAndBreak' component={TestTimingAndBreak} />
              <Route path='regulations' component={TestRegulations} />
              <Route path='testInfo' component={TestInfo} />
              <Route path='instructions' component={SectionInstructions} />
              <Route path='tests/review/:id' component={ReviewTest} />
              <Route path='tests/:id' component={QnA} />
              <Route path='tests/:id/copyright' component={CopyRight} />
              <Route path='tests/:id/disclaimer' component={Disclaimer} />
              <Route path='tests/:id/over' component={TestOver} />
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
