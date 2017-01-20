const React = require('react')
const { Row, Col } = require('react-bootstrap')
// const { object } = React.PropTypes

const Mcq = (props) => (
  <Row className="show-grid">
    <Col sm={6} md={6}>
      <p>{props.question}</p>
      <img src="" alt="" />
    </Col>
    <Col sm={6} md={6}> Answer options here</Col>
  </Row>
)

Mcq.propTypes = {
  question: React.PropTypes.string
}

module.exports = Mcq
