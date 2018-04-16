import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {EditPassword} from './editPassword'

Enzyme.configure({ adapter: new Adapter() });

describe('<EditPassword />', () => {

  it('should have state', () => {
    const wrapper = shallow(<EditPassword />)
    expect(wrapper.state().newPassword).toBe('')
  })

  it('login form or register form', () => {
    const wrapper = shallow(<EditPassword />)
    expect(wrapper.containsMatchingElement(
    [ 
      <input 
        type="password"
        name="password"
        placeholder="password"
      />,
      <button className="btn btn-success" type="submit"  > Save </button> 
    ]
      )).toBe(true)
  })

  it('should change state when type in input tag in register', () => {
    const wrapper = shallow(<EditPassword  />)
    const password = wrapper.find('input').first().simulate('change', { target: { name: 'password', value: 'password' } })
    expect(wrapper.state().newPassword).toBe('password')
  })

})