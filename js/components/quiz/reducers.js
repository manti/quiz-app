import { SET_TEST_STATUS } from './actions'

const DEFAULT_STATE = {
  testStarted: false
}

const setTestStatus = (state, action) => {
  console.log('In reducer')
  const newState = {}
  Object.assign(newState, state, {testStarted: action.testStarted})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TEST_STATUS:
      return setTestStatus(state, action)
    default:
      return state
  }
}

export default rootReducer
