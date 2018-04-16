import configureStore from 'redux-mock-store'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'
import { addPassword } from './password.action'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})



describe('test action addPassword', () => {
  it('should fetch addPassword', async() => {
    const res = await store.dispatch(addPassword(
      {
      url: "xvideos.com",
      username_email: "oke",
      password: "yes"
    }))
    const actions = store.getActions()
    expect(actions).toEqual([])
  })
})

