import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateAnswer } from './actionCreators'
const { object, func } = React.PropTypes

const OnlyInput = React.createClass({
  propTypes: {
    question: object.isRequired,
    dispatch: func
  },
  handleInputChange (e) {
    this.props.dispatch(updateAnswer(e.target.value))
    // this.props.dispatch(updateFirebaseWithAnswer(this.props.question.id, e.target.value))
    this.forceUpdate()
  },
  render () {
    return (
      <div className='OnlyInput'>
        <p>{this.props.question.question}</p>
        <FormGroup>
          <FormControl onChange={this.handleInputChange} type='text' placeholder='Answer' value={this.props.question.answer} />
        </FormGroup>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testId: state.testId,
    sectionId: state.sectionId,
    qId: state.qId,
    tests: state.tests
  }
}

export default connect(mapStateToProps)(OnlyInput)
