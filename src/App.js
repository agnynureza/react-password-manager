import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/login'
import Navbar from './components/navbar'
import FormPassword from './components/formPassword'
import List from './components/passwordList'
import edit from './components/editPassword'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/form" component={FormPassword}/>
          <Route path="/list" component={List}/>
          <Route path="/update/:id_data" component={edit}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
