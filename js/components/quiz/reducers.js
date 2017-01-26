import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION } from './actions'
import test from '../../test.json'

const DEFAULT_STATE = {
  testStarted: false,
  nextQ: '',
  prevQ: '',
  testId: '',
  sectionId: '',
  qId: ''
}

const setTestStatus = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {testStarted: action.testStarted})
  return newState
}

const setNextPrevQuestion = (state, action) => {
  const newState = {}
  let { sectionId, qId } = action
  let currentSection = test[sectionId].questions
  let nextQ, prevQ
  if (currentSection[Number(qId) + 1]) {
    nextQ = Number(qId) + 1
  } else {
    nextQ = qId
  }
  if (currentSection[Number(qId) - 1]) {
    prevQ = Number(qId) - 1
  } else {
    prevQ = qId
  }
  Object.assign(newState, state, {nextQ: String(nextQ), prevQ: String(prevQ)})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TEST_STATUS:
      return setTestStatus(state, action)
    case SET_NEXT_PREV_QUESTION:
      console.log(arguments, 'reducer params')
      return setNextPrevQuestion(state, action)
    default:
      return state
  }
}

export default rootReducer
