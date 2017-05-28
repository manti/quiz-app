import React from 'react'
import { Col, Button } from 'react-bootstrap'
import Review from './Review'
import {zeroSectionTime} from './actionCreators'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'

const {func} = React.PropTypes

class SeenAllQuestions extends React.Component {
  constructor (props) {
    super(props)
    this.onContinueClick = this.onContinueClick.bind(this)
  }

  onContinueClick () {
    // end the section time
    this.props.dispatch(zeroSectionTime(1000))
    hashHistory.push(`/sectionBreak`)
    // hashHistory.push(`/sectionTimeEnded`)
    // forward to post section timer
  }

  render () {
    return (
      <div>
        <div style={{'display': 'flex', 'justifyContent': 'flex-end'}} >
          <Col xs={2} md={1}>
            <Button onClick={() => (window.history.back())}>Return</Button>
          </Col>
          <Col xs={2} md={1}>
            <Review />
          </Col>
          <Col xs={2} md={1}>
            <Button onClick={this.onContinueClick}>Continue</Button>
          </Col>
        </div>
        <br />
        <br />
        <p>
          You have seen all of the questions in this section. You have time remaining to Review. As long as there is time remaining, you can check your work. Once you leave this section, you WILL NOT be able to return to it.
        </p>
        <p>
          Click Return to go back to the last question in this section.
        </p>
        <p>
          Click Review to go back to the Review screen.
        </p>
        <p>
          Click Continue to go on to the next section of the test.
        </p>
      </div>
    )
  }
}

SeenAllQuestions.propTypes = {
  dispatch: func
}

export default connect(null)(SeenAllQuestions)
