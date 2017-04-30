import React from 'react'
import { Col, Checkbox } from 'react-bootstrap'
import { markQuestion } from './actionCreators'
import {connect} from 'react-redux'
const {object, func} = React.PropTypes

class TestTools extends React.Component {
  constructor (props) {
    super(props)
    this.handleMarkQuestion = this.handleMarkQuestion.bind(this)
  }
  handleMarkQuestion (e, question) {
    this.props.dispatch(markQuestion(e.target.checked))
    this.forceUpdate()
  }
  render () {
    return (
      <div>
        <Col xs={2} md={1}>
          <div>Review</div>
        </Col>
        <Col xs={2} md={1}>
          <div>Mark</div>
          <Checkbox onChange={(e) => { this.handleMarkQuestion(e, this.props.q) }} checked={this.props.q.marked} />
        </Col>
        <Col xs={2} md={1}>
          <div>Calc</div>
        </Col>
        <Col xs={2} md={1}>
          <div>Help</div>
        </Col>
        <Col xs={2} md={1}>
          <div>Back</div>
        </Col>
        <Col xs={2} md={1}>
          <div>Next</div>
        </Col>
      </div>
    )
  }
}
TestTools.propTypes = {
  q: object.isRequired,
  dispatch: func
}

const mapStateToProps = (state) => {
  return {
    qId: state.qId,
    sectionId: state.sectionId
  }
}

export default connect(mapStateToProps)(TestTools)
