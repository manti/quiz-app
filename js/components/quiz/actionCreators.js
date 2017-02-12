import { firebaseDB } from './firebaseSetup'
import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION, FETCH_TESTS, UPDATE_ANSWER, UPDATE_TIME_REMAINING, UPDATE_FIREBASE_WITH_ANSWER, SET_QUIZ_PARAMS, MARK_QUESTION } from './actions'

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
  return {type: UPDATE_TIME_REMAINING, timeRemaining }
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

const tests = firebaseDB.ref('/')

export function fetchTests () {
  console.log('called')
  return dispatch => {
    tests.on('value', snapshot => {
      dispatch({
        type: FETCH_TESTS,
        payload: snapshot.val()
      })
    })
  }
}

// export function updateFirebaseWithAnswer (answer) {
//   const question = firebaseDB.ref(`/${testId}/sections/${sectionId}/questions/${questionId}`)
//   return dispatch => {
//     question.update({
//       answer: answer
//     })
//   }
// }

export function syncTimeRemaining (timeRemaining) {
  console.log('Imm called in actioncreator')
  return dispatch => {
    tests.update({
      timeRemaining: timeRemaining
    })
  }
}
