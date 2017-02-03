import React from 'react'
import Mcq from './Mcq'
import Passage from './Passage'
import Blank from './Blank'
import OnlyInput from './OnlyInput'
import Fraction from './Fraction'
import MultiAnswer from './MultiAnswer'
import { connect } from 'react-redux'
import { setNextPrevQuestion, fetchTests } from './actionCreators'

const { object, func, bool } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object,
    dispatch: func,
    tests: object,
    fetchingTests: bool
  },
  componentDidMount () {
    let {id, qId} = this.props.params
    this.props.dispatch(fetchTests())
    this.props.dispatch(setNextPrevQuestion(id, 1, qId))
  },
  componentWillReceiveProps () {
    let {id, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, 1, qId))
  },
  render () {
    if (this.props.fetchingTests) {
      return (
        <div>Fetching tests</div>
      )
    } else {
      let questionComponent
      let test = this.props.tests
      let q = test.questions[this.props.params.qId]
      switch (q.type) {
        case 'mcq':
          questionComponent = <Mcq question={q} />
          break
        case 'passage':
          questionComponent = <Passage question={q} />
          break
        case '1-blank':
          questionComponent = <Blank question={q} />
          break
        case '2-blank':
          questionComponent = <Blank question={q} />
          break
        case '3-blank':
          questionComponent = <Blank question={q} />
          break
        case 'onlyInput':
          questionComponent = <OnlyInput question={q} />
          break
        case 'fraction':
          questionComponent = <Fraction question={q} />
          break
        case 'multi-answer':
          questionComponent = <MultiAnswer question={q} />
          break
        default:
          questionComponent = q.type
      }
      return (
        <div>
          <br />
          <br />
          {questionComponent}
        </div>
      )
    }
  }
})

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    qId: state.qId,
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(QuestionHolder)
