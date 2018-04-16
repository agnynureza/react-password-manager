import React, { Component } from 'react';
import { connect }from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../store/formLogin/login.action'
import { register } from '../store/formRegister/register.action'

export class Login extends Component {
  constructor () {
    super()
    this.state = {
      login: {
        username_email:``,
        password: ``
      },
      register: {
        username: ``,
        email: ``,
        password: ``
      }
    }
  }

  handleSignIn = event => {
    this.setState({
      login:{
        ...this.state.login,
        [event.target.name]: event.target.value 
      }    
    })
  }

  handleRegister = event => {
    this.setState({
      register: {
        ...this.state.register,
        [event.target.name]: event.target.value
      }
    })
  }

  render() { 
    return ( 
    <div className="container">
      <div className="row justify-content-center" style={{marginTop:'20px'}}>
        <div className="card " style={{padding: "20px"}}>
          <div className="card-block" style={{minWidth:"350px"}}>
            <ul className="nav nav-tabs" id="myTab" role="tablist" style={{marginBottom: '20px'}}>
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Register</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="form-group">
                  <label>Email /Username</label>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-user"></i> 
                    </div>
                    <input type="text" name="username_email" onChange={this.handleSignIn} className="form-control" id="name" placeholder="username" required autoFocus/>
                  </div>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-key"></i>
                    </div>
                    <input type="password" onChange={this.handleSignIn} name="password" className="form-control" id="password" placeholder="Password" required/>
                  </div>
                </div>
                <br/>
                <button type="submit" onClick={()=> this.loginFirebase({username_email:this.state.login.username_email, password:this.state.login.password})} className="btn btn-primary">Login</button>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="form-group">
                  <label>Username</label>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-user"></i></div>
                    <input type="text" onChange={this.handleRegister} name="username" className="form-control" id="name_register" placeholder="username" required autoFocus/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address </label>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-at"></i></div>
                    <input type="email" onChange={this.handleRegister} name="email" className="form-control" id="email" placeholder="you@example.com" required autoFocus/>
                  </div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-key"></i></div>
                    <input type="password" onChange={this.handleRegister} name="password" className="form-control" id="password_register" placeholder="Password" required/>
                  </div>
                </div>
                <br/>
                <button type="submit" onClick={()=> this.registerFirebase({username:this.state.register.username, email:this.state.register.email, password:this.state.register.password})} className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> )
  }
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
  login,
  register
}, dispatch)
 
export default connect(null,mapDispatchToProps) (Login);