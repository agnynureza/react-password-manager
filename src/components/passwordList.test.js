import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {List} from './passwordList'
import Search from './searchForm' 

Enzyme.configure({ adapter: new Adapter() });

describe('<List />', () => {
  it('login form or register form', () => {
    const wrapper = shallow(<List />)
    expect(wrapper.containsMatchingElement(
    [ <div></div>,
      <Search />,
      <table
        className="table table-hover"
      />,
      <tr/>,
      <button className="btn btn-secondary" > Edit </button>,
      <button className="btn btn-danger" > Delete </button>,
      <button className="btn btn-success" > +Add Password </button>
    ]
      )).toBe(true)
  })
})