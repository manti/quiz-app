import { firebaseDB } from './firebaseSetup'
import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS, UPDATE_ANSWER, UPDATE_TIME_REMAINING, UPDATE_FIREBASE_WITH_ANSWER, SET_QUIZ_PARAMS, MARK_QUESTION, GOTO_NEXT_SECTION, TOGGLE_GOTO_PROMPT, ZERO_SECTION_TIME, TEST_OVER } from './actions'

export function setTestStatus (testStarted) {
  return { type: SET_TEST_STATUS, testStarted: testStarted }
}
export function setNextPrevQuestion (testId, sectionId, qId) {
  return { type: SET_NEXT_PREV_QUESTION, testId, sectionId, qId }
}

export function updateAnswer (answer) {
  return { type: UPDATE_ANSWER, answer }
}

export function updateTimeRemaining (timeRemaining) {
  return { type: UPDATE_TIME_REMAINING, timeRemaining }
}

export function updateFirebaseWithAnswer (answer) {
  return {type: UPDATE_FIREBASE_WITH_ANSWER, answer}
}

export function setQuizParams (testId, sectionId, qId) {
  return {type: SET_QUIZ_PARAMS, testId, sectionId, qId}
}

export function markQuestion (isMarked) {
  return {type: MARK_QUESTION, isMarked}
}

export function gotoNextQ () {
  return {type: GOTO_NEXT_SECTION}
}

export function toggleGotoPrompt () {
  return {type: TOGGLE_GOTO_PROMPT}
}

export function zeroSectionTime (timeRemaining) {
  return {type: ZERO_SECTION_TIME, timeRemaining}
}

export function completeTest (testId) {
  return {type: TEST_OVER, testId}
}

const user = firebaseDB.ref(`/users/${window.session.user_id}`)

export function fetchTests () {
  return dispatch => {
    user.on('value', snapshot => {
      dispatch({
        type: FETCH_TESTS,
        payload: snapshot.val().tests
      })
    })
  }
}
