import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {FormPassword} from './formPassword'
import renderer from 'react-test-renderer'

Enzyme.configure({ adapter: new Adapter() });

describe('<FormPassword />', () => {

  it('should have state', () => {
    const wrapper = shallow(<FormPassword />)
    expect(wrapper.state().user.url).toBe('')
    expect(wrapper.state().user.username_email).toBe('')
    expect(wrapper.state().user.password).toBe('')
    expect(wrapper.state().uppercase).toBe(false)
    expect(wrapper.state().lowercase).toBe(false)
    expect(wrapper.state().number).toBe(false)
    expect(wrapper.state().fiveDigits).toBe(false)
    expect(wrapper.state().special).toBe(false)
  })

  it('Form Password', () => {
    const wrapper = shallow(<FormPassword />)
    expect(wrapper.containsMatchingElement(
    [ <h3> Form Password </h3>,
      <input 
        type="text"
        name="url"
        placeholder="Url (ex:https://facebook.com)"
      />,
      <input 
        type="text"
        name="username_email"
        placeholder="Username/Email Address"
      />,
      <input 
        type="password"
        name="password"
        placeholder="Password"
      />,
      <button className="btn btn-success" type="submit"  > Save </button> 
    ]
      )).toBe(true)  
  })

  it('should change state when type in input tag in Form Password', () => {
    const wrapper = shallow(<FormPassword  />)
    const url = wrapper.find('input').first().simulate('change', { target: { name: 'url', value: 'url' } })
    expect(wrapper.state().user.url).toBe('')
    const username_email = wrapper.find('input').first().simulate('change', { target: { name: 'username_email', value: 'username_email' } })
    expect(wrapper.state().user.username_email).toBe('')
    const password = wrapper.find('input').first().simulate('change', { target: { name: 'password', value: 'password' } })
    expect(wrapper.state().user.password).toBe('')
  })

})

