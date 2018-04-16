import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {showDataFunc,deleteData} from '../store/ListPassword/list.action';
import Search from './searchForm'


export class List extends Component {

  deletePassword(payload){
    this.props.deleteData(payload)
  }

  render() { 
    return (
      <div>
        <h2>React Password Manager</h2>
          <Search/> 
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Url</th>
              <th scope="col">username/Email</th>
              <th scope="col">Password</th>
              <th scope="col">Create At</th>
              <th scope="col">Updated At</th>z
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <br/>
        <div className="float-right mr-5 mt-5">
          <Link to="/form">
          <button className="btn btn-success">+ Add Password</button>
          </Link>
        </div>
      </div>    
    )
  }
}

 
export default List ;