import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePassword } from '../store/ListPassword/list.action';
import {Link} from 'react-router-dom';

class EditPassword extends Component {
  constructor() {
    super()
    this.state = {
        newPassword: ''
    }
  }

handleInput = (event) => {
    this.setState({ 
      newPassword: event.target.value  
    })
}

goFirebase = (payload) => {
    this.props.updatePassword(payload)
}

  render() { 
    return (
      <div className="container" style={{marginTop: "10px"}}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3>Edit Password</h3>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-key"></i></div>
                <input type="password" onChange={this.handleInput} name="password" className="form-control" id="password" placeholder="Password" required/>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{paddingTop: "1rem"}}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Link to="/list">
            <button type="submit" onClick={()=> this.goFirebase({id:this.props.match.params.id_data,newPassword:this.state.newPassword})} className="btn btn-success"><i className="fa fa-sign-in"></i> Save</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
 
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    updatePassword
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(EditPassword);