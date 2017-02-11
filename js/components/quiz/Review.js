import React from 'react'
import { Modal, Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
const { array, bool } = require('react').PropTypes

const Review = React.createClass({
  propTypes: {
    tests: array.isRequired,
    fetchingTests: bool
  },
  getInitialState () {
    return {show: false}
  },

  showModal () {
    this.setState({show: true})
  },

  hideModal () {
    this.setState({show: false})
  },
  render () {
    return (
      <div>
        <Button onClick={this.showModal}>Review</Button>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          bsSize='large'
          aria-labelledby='contained-modal-title-lg'
        >
          <Modal.Header closeButton>
            <Modal.Title>Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Click on a question to go there</h4>
            <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Question Number</th>
                    <th>Status</th>
                    <th>Marked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Answered</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Not Answered</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Incomplete</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(Review)
