const React = require('react')
const test = require('../test.json')
const Mcq = require('./Mcq')

const firstQ = test.section1.questions[0]

console.log(firstQ)

const TestPaper = () => (
  <Mcq question={firstQ.question} />
)

module.exports = TestPaper
