import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS, UPDATE_ANSWER, UPDATE_TIME_REMAINING, UPDATE_FIREBASE_WITH_ANSWER, SET_QUIZ_PARAMS, MARK_QUESTION, TOGGLE_GOTO_PROMPT, ZERO_SECTION_TIME, TEST_OVER } from './actions'
import { firebaseDB } from './firebaseSetup'
import {hashHistory} from 'react-router'
const DEFAULT_STATE = {
  testStarted: false,
  nextQ: '',
  prevQ: '',
  testId: '',
  sectionId: '',
  qId: '',
  tests: {},
  fetchingTests: true,
  isSectionLastQ: false,
  showSectionPrompt: false
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
    if (!sectionNow) {
      hashHistory.push(`/tests/${testId}/over`)
      return false
    }
    let sectionQuestions = sectionNow.questions
    let nextQ, prevQ
    let isLastQ = false
    let sectionQuestionsCount = Object.keys(sectionQuestions).length
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
    if (Number(prevQ) === sectionQuestionsCount - 1 && Number(nextQ) === sectionQuestionsCount) {
      isLastQ = true
    }
    Object.assign(newState, state, {nextQ: String(nextQ), prevQ: String(prevQ), isSectionLastQ: isLastQ})
    return newState
  } else {
    return state
  }
}

const syncTimeRemaining = (testId, sectionId, timeRemaining) => {
  const section = firebaseDB.ref(`/users/${window.session.user_id}/tests/${testId}/sections/${sectionId}`)
  section.update({
    timeRemaining: timeRemaining
  })
}

const updateAnswerInTest = (state, action) => {
  const newState = {}
  let { sectionId, testId, qId } = state
  let myTests = state.tests
  myTests[testId].sections[sectionId].questions[qId].answer = action.answer
  syncTimeRemaining(testId, sectionId, myTests[testId].sections[sectionId].timeRemaining)
  const question = firebaseDB.ref(`/users/${window.session.user_id}/tests/${testId}/sections/${sectionId}/questions/${qId}`)
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
    syncTimeRemaining(testId, sectionId, action.timeRemaining)
  }
  modifiedTests[testId].sections[sectionId].timeRemaining = action.timeRemaining
  Object.assign(newState, state, {tests: modifiedTests})
  return newState
}

const updateFirebaseAnswer = (state, action) => {
  let { qId, sectionId, testId } = state
  const question = firebaseDB.ref(`/users/${window.session.user_id}/tests/${testId}/sections/${sectionId}/questions/${qId}`)
  question.update({
    answer: action.answer
  })
}

const setQuizParamsInState = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {testId: action.testId, qId: action.qId, sectionId: action.sectionId})
  return newState
}

const markInFirebase = (state, action) => {
  let { qId, sectionId, testId } = state
  const question = firebaseDB.ref(`/users/${window.session.user_id}/tests/${testId}/sections/${sectionId}/questions/${qId}`)
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

const toggleGotoPrompt = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {showSectionPrompt: !state.showSectionPrompt})
  return newState
}

const zeroTheSectionTime = (state, action) => {
  const newState = {}
  let { sectionId, testId } = state
  let modifiedTests = state.tests
  modifiedTests[testId].sections[sectionId].timeRemaining = action.timeRemaining
  Object.assign(newState, state, {tests: modifiedTests})
  syncTimeRemaining(testId, sectionId, action.timeRemaining)
  return newState
}

const testIsOver = (state, action) => {
  const test = firebaseDB.ref(`/users/${window.session.user_id}/tests/${action.testId}`)
  test.update({
    completed: true
  })
  // const newState = {}
  // let {tests} = state.tests
  // tests[action.testId].completed = true
  // Object.assign(newState, state, {tests: tests})
  // return newState
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
    case TOGGLE_GOTO_PROMPT:
      return toggleGotoPrompt(state, action)
    case ZERO_SECTION_TIME:
      return zeroTheSectionTime(state, action)
    case TEST_OVER:
      return testIsOver(state, action)
    default:
      return state
  }
}

export default rootReducer
