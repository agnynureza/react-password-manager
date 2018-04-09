import {SIGNIN} from './login.actionType'

const initialState = {
  username_email: '' 
}

const reducerLogin = (state = initialState,action) => {
  switch(action.type){
    case SIGNIN:{
      return {
        ...state, username_email: action.payload
      }
    }
    default :{
      return state
    }
  }
}

export {
  reducerLogin
}
