import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Link } from 'react-router'
import { Navbar } from 'react-bootstrap'
import TestsList from './components/quiz/TestsList'
import Landing from './components/quiz/Landing'
import QnA from './components/quiz/QnA'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        {/* Change to HashRouter if not using webpack dev server */}
        <div className='container'>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/' className='brand-link'>
                  App title
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>
          <Match exactly pattern='/' component={Landing} />
          <Match exactly pattern='/tests' component={TestsList} />
          <Match exactly pattern='/tests/:id' component={QnA} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
