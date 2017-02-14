import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {toggleGotoPrompt} from './actionCreators'
import { hashHistory } from 'react-router'
const { bool, func, string } = require('react').PropTypes

const NextSectionPrompt = React.createClass({
  propTypes: {
    showSectionPrompt: bool,
    dispatch: func,
    testId: string,
    sectionId: string
  },
  getInitialState () {
    return {show: true}
  },

  showModal () {
    this.setState({show: true})
  },

  hideModal () {
    this.props.dispatch(toggleGotoPrompt())
  },

  gotoNextQuestion () {
    hashHistory.push(`/tests/${this.props.testId}/${Number(this.props.sectionId) + 1}/1`)
    this.hideModal()
  },

  render () {
    return (
      <Modal
        show={this.props.showSectionPrompt}
        onHide={this.hideModal}
        dialogClassName='custom-modal'
      >
        <Modal.Body>
          <h4>Are you sure, you want to goto next section?</h4>
          <p>This cannot be undone</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
          <Button onClick={this.gotoNextQuestion}>Yes go</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    showSectionPrompt: state.showSectionPrompt,
    testId: state.testId,
    sectionId: state.sectionId
  }
}

export default connect(mapStateToProps)(NextSectionPrompt)
