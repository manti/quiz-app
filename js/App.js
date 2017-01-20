import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import MasterList from './components/quiz/MasterList'
import DepartmentCRUD from './components/quiz/DepartmentCRUD'
import { Button } from 'react-bootstrap'

const App = React.createClass({
  render () {
    console.log(Button)
    return (
      <BrowserRouter>
        {/* Change to HashRouter if not using webpack dev server */}
        <div className='app'>
          <h3>Quiz</h3>
          <Button bsStyle='link'>Login</Button>
          <Match exactly pattern='/list' component={MasterList} />
          <Match exactly pattern='/add' component={DepartmentCRUD} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
