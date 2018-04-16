import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPassword} from '../store/formPassword/password.action'
import {Link} from 'react-router-dom';

export class FormPassword extends Component {
  constructor(){
    super()
    this.state = {
      user:{
        url: '',
        username_email: '',
        password: ''
      },
      uppercase: false,
      lowercase: false,
      special: false,
      number: false,
      fiveDigits: false
    }
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
                <input type="text" name="url" className="form-control" id="url" placeholder="Url (ex:https://facebook.com)" required/>
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
                <input type="text" name="username_email" className="form-control" id="email" placeholder="Username/Email Address" required/>
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
                <input type="password" name="password" onChange={this.onChange} className="form-control" id="password" placeholder="Password"/>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{textAlign:'justify'}}>
        <div className="col-md-3"></div>
          <div className="col-md-6">
            <h6 className="password-strength-title-font">Password Strength:</h6>
            <div className="form-group requirement">
              <span className="password-strength-require-font">Password harus memiliki setidaknya satu karakter huruf besar (upper - case)</span>
              {
                this.state.uppercase === true ? <div>[v]</div> : <div>[x]</div>
              }
            </div>
            <div className="form-group requirement">
              <span className="password-strength-require-font">Password harus memiliki setidaknya satu karakter huruf kecil (lower - case)</span>
              {
                this.state.lowercase === true  ? <div>[v]</div>: <div>[x]</div>
              }
            </div>
            <div className="form-group requirement">
              <span className="password-strength-require-font">Password harus memiliki setidaknya satu karakter special (!&%^£)</span>
              {
                this.state.special === true  ? <div>[v]</div>: <div>[x]</div>
              }
            </div>
            <div className="form-group requirement">
              <span className="password-strength-require-font">Password harus memiliki setidaknya satu angka</span>
              {
                this.state.number === true  ? <div>[v]</div>: <div>[x]</div>
              }
            </div>
            <div className="form-group requirement">
              <span className="password-strength-require-font">Password harus memiliki panjang lebih dari 5 karakter</span>
              {
                this.state.fiveDigits === true  ? <div>[v]</div>: <div>[x]</div>
              }
            </div>
          </div>
        </div>
        <div className="row" style={{paddingTop: "1rem"}}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
              <button type="submit" onClick={()=> this.goFirebase()} className="btn btn-success"><i className="fa fa-sign-in"></i> Save</button>
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