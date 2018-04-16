import { SIGNOUT } from "./login.actionType";

const initialize = {
  userid: '',
  status: false
}

const reducerLogin = (state=initialize,action)=>{
  switch(action.type){
    case SIGNOUT:
      return{
        ...state, 
        status: true,

      } 
    default:
    return state
  }
} 

export {
  reducerLogin
}