import React from 'react'
import test from '../../test.json'
import Mcq from './Mcq'
import Passage from './Passage'
import Blank from './Blank'
import OnlyInput from './OnlyInput'
import { connect } from 'react-redux'
import { setNextPrevQuestion } from './actionCreators'

const { object, func } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object,
    dispatch: func
  },
  componentDidMount () {
    let {id, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, 1, qId))
  },
  componentWillReceiveProps () {
    let {id, qId} = this.props.params
    this.props.dispatch(setNextPrevQuestion(id, 1, qId))
  },
  render () {
    let q = test[1].questions[this.props.params.qId]
    let questionComponent
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
})

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    qId: state.qId
  }
}

export default connect(mapStateToProps)(QuestionHolder)
