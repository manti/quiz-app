import { SET_TEST_STATUS, SET_NEXT_PREV_QUESTION } from './actions'

export function setTestStatus (testStarted) {
  return { type: SET_TEST_STATUS, testStarted: testStarted }
}
export function setNextPrevQuestion (testId, sectionId, qId) {
  return { type: SET_NEXT_PREV_QUESTION, testId, sectionId, qId }
}
