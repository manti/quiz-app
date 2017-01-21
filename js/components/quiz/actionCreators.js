import { SET_TEST_STATUS } from './actions'

export function setTestStatus (testStarted) {
  return { type: SET_TEST_STATUS, testStarted: testStarted }
}
