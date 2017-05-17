import React from 'react'
import { Col, Checkbox, Glyphicon } from 'react-bootstrap'
import { markQuestion } from './actionCreators'
import {connect} from 'react-redux'
import CalculatorHelp from './CalculatorHelp'
import Review from './Review'

const {object, func, string} = React.PropTypes

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
    const {qId} = this.props
    return (
      <div>
        <Col xs={2} md={1}>
          <Review arg={{qId}} />
        </Col>
        <Col xs={2} md={1}>
          <div>Mark</div>
          <Checkbox style={{margin: '0 5px'}} onChange={(e) => { this.handleMarkQuestion(e, this.props.q) }} checked={this.props.q.marked} />
        </Col>
        <Col xs={2} md={1}>
          <CalculatorHelp arg={{qId}} />
        </Col>
        <Col xs={2} md={1}>
          <div>Help</div>
          <Glyphicon className='center-the-icon' glyph='question-sign' />
        </Col>
        <Col xs={2} md={1}>
          <div>Back</div>
          <Glyphicon className='center-the-icon' glyph='arrow-left' />
        </Col>
        <Col xs={2} md={1}>
          <div>Next</div>
          <Glyphicon className='center-the-icon' glyph='arrow-right' />

        </Col>
      </div>
    )
  }
}
TestTools.propTypes = {
  q: object.isRequired,
  dispatch: func,
  qId: string
}

const mapStateToProps = (state) => {
  return {
    qId: state.qId
  }
}

export default connect(mapStateToProps)(TestTools)
