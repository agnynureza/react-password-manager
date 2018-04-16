import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import editPassword from './components/editPassword'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import store from '../src/store/store'
import {Provider} from 'react-redux'
import Navbar from '../src/components/navbar' 
import FormPassword from '../src/components/formPassword' 
// jangan lupa import komponen yang mau di tes di dalam sin

configure({adapter: new Adapter()})


describe('<App/>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('should have <Navbar/>', () => {
    const wrapper = shallow (<App/>)
    expect(wrapper.containsAllMatchingElements([
      <Navbar/>,
    ])).toBe(true);
  })
})
