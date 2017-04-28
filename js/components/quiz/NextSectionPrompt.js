import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {toggleGotoPrompt, zeroSectionTime, completeTest} from './actionCreators'
import { hashHistory } from 'react-router'
const { bool, func, string, array } = require('react').PropTypes

const NextSectionPrompt = React.createClass({
  propTypes: {
    showSectionPrompt: bool,
    dispatch: func,
    testId: string,
    sectionId: string,
    tests: array
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

  gotoNextSection () {
    let testSections = this.props.tests[this.props.testId].sections
    let numberOfSections = Object.keys(testSections)
    if (Number(this.props.sectionId) === numberOfSections.length) {
      this.props.dispatch(completeTest(this.props.testId))
      hashHistory.push(`/tests/${this.props.testId}/over`)
      this.hideModal()
    } else {
      hashHistory.push(`/tests/${this.props.testId}/${Number(this.props.sectionId) + 1}/1`)
      this.props.dispatch(zeroSectionTime(0))
    }
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
          <Button onClick={this.gotoNextSection}>Yes go</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    showSectionPrompt: state.showSectionPrompt,
    testId: state.testId,
    sectionId: state.sectionId,
    tests: state.tests
  }
}

export default connect(mapStateToProps)(NextSectionPrompt)
