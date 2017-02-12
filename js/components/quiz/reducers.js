import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS, UPDATE_ANSWER, UPDATE_TIME_REMAINING, UPDATE_FIREBASE_WITH_ANSWER, SET_QUIZ_PARAMS, MARK_QUESTION } from './actions'
import { firebaseDB } from './firebaseSetup'

const DEFAULT_STATE = {
  testStarted: false,
  nextQ: '',
  prevQ: '',
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
    let { qId, sectionId, testId } = action
    let sectionNow = state.tests[testId].sections[sectionId]
    let sectionQuestions = sectionNow.questions
    let nextQ, prevQ
    if (sectionQuestions[Number(qId) + 1]) {
      nextQ = Number(qId) + 1
    } else {
      nextQ = qId
    }
    if (sectionQuestions[Number(qId) - 1]) {
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

const syncTimeRemaining = (testId, sectionId, timeRemaining) => {
  console.log('Imm called in reducer')
  const section = firebaseDB.ref(`/${testId}/sections/${sectionId}`)
  section.update({
    timeRemaining: timeRemaining
  })
  // return dispatch => {
  //   tests.update({
  //     timeRemaining: timeRemaining
  //   })
  // }
}

const updateAnswerInTest = (state, action) => {
  const newState = {}
  let { sectionId, testId, qId } = state
  let myTests = state.tests
  console.log('Update time remaining also')
  myTests[testId].sections[sectionId].questions[qId].answer = action.answer
  // syncTimeRemaining(testId, sectionId, myTests[testId].sections[sectionId].timeRemaining)
  const question = firebaseDB.ref(`/${testId}/sections/${sectionId}/questions/${qId}`)
  question.update({
    answer: action.answer
  })
  Object.assign(newState, state, {tests: myTests})
  return newState
}

const fetchedTestsFromDB = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {tests: action.payload, fetchingTests: false})
  return newState
}

const updateTimeRemaining = (state, action) => {
  const newState = {}
  let { sectionId, testId } = state
  let modifiedTests = state.tests
  if (action.timeRemaining % 10000 < 1000) {
    syncTimeRemaining(testId, sectionId, modifiedTests[testId].sections[sectionId].timeRemaining)
  }
  modifiedTests[testId].sections[sectionId].timeRemaining = action.timeRemaining
  Object.assign(newState, state, {tests: modifiedTests})
  return newState
}

const updateFirebaseAnswer = (state, action) => {
  let { qId, sectionId, testId } = state
  const question = firebaseDB.ref(`/${testId}/sections/${sectionId}/questions/${qId}`)
  question.update({
    answer: action.answer
  })
  // return dispatch => {
  //   question.update({
  //     answer: answer
  //   })
  // }
}

const setQuizParamsInState = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {testId: action.testId, qId: action.qId, sectionId: action.sectionId})
  return newState
}

const markInFirebase = (state, action) => {
  let { qId, sectionId, testId } = state
  const question = firebaseDB.ref(`/${testId}/sections/${sectionId}/questions/${qId}`)
  question.update({
    marked: action.isMarked
  })
}

const toggleMarkThis = (state, action) => {
  const newState = {}
  let { sectionId, testId, qId } = state
  let currentSetOfTests = state.tests
  let currentQuestion = currentSetOfTests[testId].sections[sectionId].questions[qId]
  currentQuestion.marked = action.isMarked
  Object.assign(newState, state, {tests: currentSetOfTests})
  markInFirebase(state, action)
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
    case UPDATE_TIME_REMAINING:
      return updateTimeRemaining(state, action)
    case UPDATE_FIREBASE_WITH_ANSWER:
      return updateFirebaseAnswer(state, action)
    case SET_QUIZ_PARAMS:
      return setQuizParamsInState(state, action)
    case MARK_QUESTION:
      return toggleMarkThis(state, action)
    default:
      return state
  }
}

export default rootReducer
