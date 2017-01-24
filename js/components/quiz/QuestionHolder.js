import React from 'react'
import test from '../../test.json'
import Mcq from './Mcq'
import { connect } from 'react-redux'
import { setNextPrevQuestion } from './actionCreators'

const { object, func } = React.PropTypes

const QuestionHolder = React.createClass({
  propTypes: {
    params: object,
    dispatch: func
  },
  componentDidMount() {
    this.props.dispatch(setNextPrevQuestion('2', '3'))
  },
  render () {
    let q = test.section1.questions[this.props.params.qId]
    let questionComponent
    switch (q.type) {
      case 'mcq':
        questionComponent = <Mcq question={q} />
        break
      default:
        questionComponent = q.type
    }
    return (
      <div>
        <p>Question holder</p>
        {questionComponent}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    nextQ: state.nextQ,
    prevQ: state.prevQ
  }
}

export default connect(mapStateToProps)(QuestionHolder)
