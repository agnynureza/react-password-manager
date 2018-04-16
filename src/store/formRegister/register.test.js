import configureStore from 'redux-mock-store'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'
import { register } from './register.action'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})



describe('test action register', () => {
  it('should fetch register', async() => {
    const res = await store.dispatch(register(
      {
      username: "xvideos.com",
      email: "oke",
      password: "yes"
    }))
    const actions = store.getActions()
    expect(actions).toEqual([])
  })
})

