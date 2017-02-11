import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import Calculator from './Calculator/Calculator'
const { object, bool } = require('react').PropTypes
// import Calculator from 'react-calculator'

const CalculatorHelp = React.createClass({
  propTypes: {
    tests: object.isRequired,
    arg: object.isRequired,
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
    if (this.props.arg.qId && !this.props.fetchingTests) {
      return (
        <div>
          <Button onClick={this.showModal}>Calculator</Button>
          <Modal
            show={this.state.show}
            onHide={this.hideModal}
            dialogClassName='custom-modal'
          >
            <div className='calculator-wrapper'>
              <Calculator />
            </div>
          </Modal>
        </div>
      )
    }
    else 
    {
      return <br />
    }
  }
})

const mapStateToProps = (state) => {
  return {
    tests: state.tests,
    fetchingTests: state.fetchingTests
  }
}

export default connect(mapStateToProps)(CalculatorHelp)
