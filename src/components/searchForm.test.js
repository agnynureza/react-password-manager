import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Search} from './searchForm'

Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {

  it('search form ', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.containsMatchingElement(
      <label
        className="float-left ml-3"
      > Search Data: </label>
      )).toBe(false)
  })
})