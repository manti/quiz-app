import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setTestStatus } from './actionCreators'
const { string, func, bool } = React.PropTypes

const TestCard = React.createClass({
  propTypes: {
    title: string.isRequired,
    testId: string.isRequired,
    dispatch: func.isRequired,
    testStarted: bool
  },
  startTest (started) {
    this.props.dispatch(setTestStatus(true))
  },
  render () {
    console.log('testStarted as prop in TestCard', this.props.testStarted)
    return (
      <li className='list-group-item'>
        <span className='lead'>{this.props.title}</span>
        <ButtonGroup bsClass='pull-right'>
          <Link to={`/tests/${this.props.testId}`}>
            <Button bsStyle='link' onClick={this.startTest}>Take test</Button>
          </Link>
          <Button bsStyle='link'>View report card</Button>
          <Button bsStyle='link'>Solutions</Button>
        </ButtonGroup>
      </li>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    testStarted: state.testStarted
  }
}

export default connect(mapStateToProps)(TestCard)
