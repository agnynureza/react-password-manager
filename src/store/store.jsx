import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {reducerLogin} from './formLogin/login.reducer'
import {reducerList} from './ListPassword/list.reducer'


const reducers = combineReducers({
  reducerLogin,
  reducerList
}) 

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)


export default store ;