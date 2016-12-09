const React = require('react')
const test = require('../test.json')

const TestPaper = React.createClass({
  render () {
    console.log(test)
    return (
      <div>Hello world!</div>
    )
  }
})

module.exports = TestPaper
