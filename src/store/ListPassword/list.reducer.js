import {SHOW_DATA_PASSWORD} from './list.actionType'

const initialState = {
  listData: []
}

const reducerList = (state=initialState,action) => {
  switch(action.type){
    case SHOW_DATA_PASSWORD:
      return{
        ...state, listData: action.payload 
      } 
    default:
    return state
  }
}

export {
  reducerList
}