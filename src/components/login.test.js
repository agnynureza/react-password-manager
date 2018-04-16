import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Login} from './login'


Enzyme.configure({ adapter: new Adapter() });

describe('<Login />', () => {
  it('should have state', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.state().login.username_email).toBe('')
    expect(wrapper.state().login.password).toBe('')
    expect(wrapper.state().register.username).toBe('')
    expect(wrapper.state().register.email).toBe('')
    expect(wrapper.state().register.password).toBe('')
  })
  it('login form or register form', () => {
    delete localStorage.token
    const wrapper = shallow(<Login />)
    expect(wrapper.containsMatchingElement(
    [ 
      <input 
        type="text"
        name="username_email"
        placeholder="username"
      />,
      <input 
        type="password"
        name="password"
        placeholder="password"
      />,
      <button className="btn btn-primary" type="submit"  > Login </button>,
      <input 
        type="text"
        name="username"
        placeholder="username"
      />,
      <input 
      type="email"
      name="email"
      placeholder="you@example.com"
      />,
      <input 
      type="password"
      name="password"
      placeholder="password"
      />,
      <button className="btn btn-primary" type="submit"  > Register </button>
    ]
      )).toBe(true)
  })

  it('should change state when type in input tag in register', () => {
    const wrapper = shallow(<Login  />)
    const username = wrapper.find('input').first().simulate('change', { target: { name: 'username', value: 'email' } })
    expect(wrapper.state().register.username).toBe('')
    const email = wrapper.find('input').first().simulate('change', { target: { name: 'email', value: 'email' } })
    expect(wrapper.state().register.email).toBe('')
    const password = wrapper.find('input').last().simulate('change', { target: { name: 'password', value: 'password' } })
    expect(wrapper.state().register.password).toBe('password')
  })
  it('should change state when type in input tag in login', () => {
    const wrapper = shallow(<Login  />)
    const username_email = wrapper.find('input').first().simulate('change', { target: { name: 'username_email', value: 'username_email' } })
    expect(wrapper.state().login.username_email).toBe('username_email')
    const password = wrapper.find('input').last().simulate('change', { target: { name: 'password', value: 'password' } })
    expect(wrapper.state().login.password).toBe('')
  })
})