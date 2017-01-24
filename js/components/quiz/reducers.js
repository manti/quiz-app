import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION } from './actions'

const DEFAULT_STATE = {
  testStarted: false
}

const setTestStatus = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {testStarted: action.testStarted})
  return newState
}

const setNextPrevQuestion = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {nextQ: action.nextQ, prevQ: action.prevQ})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TEST_STATUS:
      return setTestStatus(state, action)
    case SET_NEXT_PREV_QUESTION:
      return setNextPrevQuestion(state, action)
    default:
      return state
  }
}

export default rootReducer
