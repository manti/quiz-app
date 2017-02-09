import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import Calculator from './Calculator/Calculator'
// import Calculator from 'react-calculator'

const CalculatorHelp = React.createClass({
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
})

export default CalculatorHelp
