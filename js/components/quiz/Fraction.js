import React from 'react'
import { Col, Row } from 'react-bootstrap'
const { object } = React.PropTypes

const Fraction = React.createClass({
  propTypes: {
    question: object.isRequired
  },
  render () {
    return (
      <div>
        {this.props.question.question}
        <br />
        <br />
        <Row>
          <Col xs={2}>
            <input type='text' className='form-control' />
          </Col>
        </Row>
        <Row>
          <hr className='col-xs-2' style={{marginBottom: '10px', 'marginTop': '10px'}} />
        </Row>
        <Row>
          <Col xs={2}>
            <input type='text' className='form-control' />
          </Col>
        </Row>
      </div>
    )
  }
})

export default Fraction
