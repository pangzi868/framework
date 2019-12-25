import { get, post, put } from "utils/dataAccess/axios";
import { combineReducers } from "redux";
import { mockClosure } from 'utils/mock'

const GET_SMS = 'GET_SMS'

const IS_MOCK_CURRENT_MODULE = false  // 控制当前模块的所有接口是否使用mock
const isMock = mockClosure(IS_MOCK_CURRENT_MODULE)


/**
 * action start
 */

// 获取验证码
export function getSMSMessage(params, cb) {
  return post({
    url: `${isMock()}/api/login/smsSendCode`,
    bodyData: {
      phoneNumber: params.phoneNumber
    },
    actionType: GET_SMS,
    successConfig: {
      callback: cb
    },
    failConfig: {
      message: '获取验证码失败'
    }
  })
}

/**
 * action end
 */


/**
 * reducers start
 */
const SMSMessage = (previousState = {}, action) => {
  if (action.type === GET_SMS) {
    return action.data
  } else {
    return previousState
  }
}
/**
 * reducers end
 */

const login = combineReducers({
  SMSMessage,
});
export default login;
