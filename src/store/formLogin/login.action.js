import {SIGNIN} from './login.actionType'

export const signIn = () => {
  success()
}





const success = (payload) => {
  return{
    type: SIGNIN,
    payload: payload
  }
}