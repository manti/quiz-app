import { firebaseDB } from './firebaseSetup'
import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS, UPDATE_ANSWER, UPDATE_TIME_REMAINING } from './actions'

export function setTestStatus (testStarted) {
  return { type: SET_TEST_STATUS, testStarted: testStarted }
}
export function setNextPrevQuestion (testId, sectionId, qId) {
  return { type: SET_NEXT_PREV_QUESTION, testId, sectionId, qId }
}

export function updateAnswer (questionId, answer) {
  return { type: UPDATE_ANSWER, questionId, answer }
}

export function updateTimeRemaining (timeRemaining) {
  return {type: UPDATE_TIME_REMAINING, timeRemaining }
}

const tests = firebaseDB.ref('/1')

export function fetchTests () {
  return dispatch => {
    tests.on('value', snapshot => {
      dispatch({
        type: FETCH_TESTS,
        payload: snapshot.val()
      })
    })
  }
}

export function updateFirebaseWithAnswer (questionId, answer) {
  const question = firebaseDB.ref(`/1/questions/${questionId}`)
  return dispatch => {
    question.update({
      answer: answer
    })
  }
}

export function syncTimeRemaining (timeRemaining) {
  return dispatch => {
    tests.update({
      timeRemaining: timeRemaining
    })
  }
}
