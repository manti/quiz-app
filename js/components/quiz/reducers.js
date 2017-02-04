import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS, UPDATE_ANSWER } from './actions'

const DEFAULT_STATE = {
  testStarted: false,
  nextQ: '2',
  prevQ: '1',
  testId: '',
  sectionId: '',
  qId: '',
  tests: {},
  fetchingTests: true
}

const setTestStatus = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {testStarted: action.testStarted})
  return newState
}

const setNextPrevQuestion = (state, action) => {
  if (!state.fetchingTests) {
    const newState = {}
    let { qId } = action
    let currentSection = state.tests.questions
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
  } else {
    return state
  }
}

const updateAnswerInTest = (state, action) => {
  const newState = {}
  let modifiedTest = state.tests
  modifiedTest.questions[action.questionId].answer = action.answer
  Object.assign(newState, state, {tests: modifiedTest})
  return newState
}

const fetchedTestsFromDB = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {tests: action.payload, fetchingTests: false})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_TEST_STATUS:
      return setTestStatus(state, action)
    case SET_NEXT_PREV_QUESTION:
      return setNextPrevQuestion(state, action)
    case FETCH_TESTS:
      return fetchedTestsFromDB(state, action)
    case UPDATE_ANSWER:
      return updateAnswerInTest(state, action)
    default:
      return state
  }
}

export default rootReducer
