import React from 'react'
import { Modal, Table, Glyphicon } from 'react-bootstrap'
import { connect } from 'react-redux'
const { bool, string, array } = require('react').PropTypes
import { hashHistory } from 'react-router'

const Review = React.createClass({
  propTypes: {
    tests: array.isRequired,
    fetchingTests: bool,
    sectionId: string,
    testId: string
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
  gotoThisQ (e, q) {
    hashHistory.push(`/tests/${this.props.testId}/${this.props.sectionId}/${q}`)
    this.hideModal()
  },
  render () {
    let sectionQuestions = []
    if (!this.props.fetchingTests) {
      let {testId = 1, sectionId = 1} = this.props
      sectionQuestions = this.props.tests[testId].sections[sectionId].questions
      const marked = <Glyphicon glyph='ok' />
      const notMarked = <Glyphicon glyph='remove' />
      return (
        <div>
          <div onClick={this.showModal} style={{textAlign: 'center'}}>
            <div>Review</div>
            <Glyphicon className='center-the-icon' glyph='list-alt' />
          </div>
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
                  {sectionQuestions.map((q, i) => {
                    return (
                      <tr style={{cursor: 'pointer'}} key={i} onClick={(e) => { this.gotoThisQ(e, q.id) }}>
                        <td>{q.id}</td>
                        <td>{q.answer && q.answer.length ? 'Answered' : 'Not answered'}</td>
                        <td>{q.marked ? marked : notMarked}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </Modal.Body>
          </Modal>
        </div>
      )
    } else {
      return <br />
    }
  }
})

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    fetchingTests: state.fetchingTests,
    testId: state.testId,
    sectionId: state.sectionId
  }
}

export default connect(mapStateToProps)(Review)
