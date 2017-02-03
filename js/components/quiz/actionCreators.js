import { firebaseDB } from './firebaseSetup'
import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS } from './actions'

export function setTestStatus (testStarted) {
  return { type: SET_TEST_STATUS, testStarted: testStarted }
}
export function setNextPrevQuestion (testId, sectionId, qId) {
  return { type: SET_NEXT_PREV_QUESTION, testId, sectionId, qId }
}

const Tests = firebaseDB.ref('/1')

export function fetchTests () {
  return dispatch => {
    Tests.on('value', snapshot => {
      dispatch({
        type: FETCH_TESTS,
        payload: snapshot.val()
      })
    })
  }
}
