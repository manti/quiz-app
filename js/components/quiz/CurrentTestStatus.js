import React from 'react'
import {connect} from 'react-redux'
import SectionTimer from './SectionTimer'
import { Col } from 'react-bootstrap'

const {string, object} = React.PropTypes
class CurrentTestStatus extends React.Component {
  render () {
    if (this.props.isReview) {
      return (
        <div>
          <Col xs={16} md={11}>
            <div style={{'fontWeight': 'bold', 'fontSize': '16px'}} className='i-am-center'>Question {Number(this.props.qId)} of {this.props.questionsCount}</div>
          </Col>
        </div>
      )
    }
    return (
      <div>
        <Col md={6} mdPush={5}>
          <div style={{'fontWeight': 'bold', 'fontSize': '16px'}} className='i-am-center'>Question {Number(this.props.qId)} of {this.props.questionsCount}</div>
        </Col>
        <Col mdOffset={4} md={2} pullRight>
          <SectionTimer arg={this.props.arg} />
        </Col>
      </div>
    )
  }
}
CurrentTestStatus.propTypes = {
  qId: string.isRequired,
  arg: object.isRequired,
  questionsCount: string.isRequired,
  isReview: string
}
const mapStateToProps = (state) => {
  return {
    qId: state.qId
  }
}

export default connect(mapStateToProps)(CurrentTestStatus)
