import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPassword} from '../store/formPassword/password.action'
import {Link} from 'react-router-dom';

class FormPassword extends Component {
  constructor(){
    super()
    this.state = {
      user:{
        url: '',
        username_email: '',
        password: ''
      }
    }
  }

  passwordHandle = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value 
      }
    })
  }

  goFirebase = (data) => {
    this.props.addPassword(data)
  }  

  render() { 
    return (
      <div className="container" style={{marginTop: "10px"}}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3>Form Password</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group has-danger">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-user"></i></div>
                <input type="text" name="url" onChange={this.passwordHandle} className="form-control" id="url" placeholder="Url (ex:https://facebook.com)" required/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group has-danger">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-at"></i></div>
                <input type="text" name="username_email" onChange={this.passwordHandle} className="form-control" id="email" placeholder="Username/Email Address" required/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-key"></i></div>
                <input type="password" name="password" onChange={this.passwordHandle} className="form-control" id="password" placeholder="Password" required/>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingTop: "1rem"}}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Link to="/list">
            <button type="submit" onClick={()=> this.goFirebase({url: this.state.user.url, username_email: this.state.user.username_email, password: this.state.user.password})} className="btn btn-success"><i className="fa fa-sign-in"></i> Save</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
 
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addPassword
  }, dispatch)
}

export default connect(null,mapDispatchToProps) (FormPassword) ;