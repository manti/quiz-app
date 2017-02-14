import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {toggleGotoPrompt} from './actionCreators'
const { bool, func } = require('react').PropTypes

const NextSectionPrompt = React.createClass({
  propTypes: {
    showSectionPrompt: bool,
    dispatch: func
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
          <Button onClick={this.hideModal}>Yes go</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    showSectionPrompt: state.showSectionPrompt
  }
}

export default connect(mapStateToProps)(NextSectionPrompt)
