import configureStore from 'redux-mock-store'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import thunk from 'redux-thunk'
import { showDataFunc,updatePassword,deleteData,searchData } from './list.action'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const store = mockStore({})



describe('test action showDataFunc', () => {
  it('should fetch showDataFunc', async() => {
    const res = await store.dispatch(showDataFunc())
    const actions = store.getActions()
    expect(actions).toEqual([])
  })
})


describe('test action updatePassword', () => {
  it('should fetch updatePassword', async() => {
    const res = await store.dispatch(updatePassword({id:'asdasdsad', newPassword: 'dadasdas'}))
    const actions = store.getActions()
    expect(actions).toEqual([])
    // expect(actions[1].type).toEqual('SHOW_DATA_PASSWORD')
  })
})


describe('test action deleteData', () => {
  it('should fetch deleteData', async() => {
    const res = await store.dispatch(deleteData())
    const actions = store.getActions()
    // expect(actions[2].type).toEqual('SHOW_DATA_PASSWORD')
    // expect(actions[2].payload).not.toBeUndefined()
    expect(actions).toEqual([])
  })
})


describe('test action searchData', () => {
  it('should fetch searchData', async() => {
    const res = await store.dispatch(searchData())
    const actions = store.getActions()
    expect(actions).toEqual([])
    // expect(actions[3].type).toEqual('SHOW_DATA_PASSWORD')
    // expect(actions[3].payload).not.toBeUndefined()
  })
})