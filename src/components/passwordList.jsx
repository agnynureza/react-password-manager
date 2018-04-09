import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {showDataFunc,deleteData} from '../store/ListPassword/list.action';
import Search from './searchForm'


class List extends Component {
  componentDidMount(){
    this.props.showDataFunc()
  }

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
              <th scope="col">Updated At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.listData.map((data,i) => {
              return (
              <tr key={data.id}>
                <th scope="row">{i+1}</th>
                <td>{data.val.url}</td>
                <td>{data.val.username_email}</td>
                <td>{data.val.password}</td>
                <td>{data.val.createdAt}</td>
                <td>{data.val.updatedAt}</td>
                <td>
                  <Link to={`/update/${data.id}`}>
                  <button className="btn btn-scondary" style={{marginRight:'10px'}}>Edit</button>
                  </Link>
                  <button className="btn btn-danger" onClick={()=> this.deletePassword(data.id)} >Delete</button>
                </td>
              </tr>
              )
            })
          }
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

const mapStateToProps = state =>{
  console.log(state.reducerList)
  return {
    listData: state.reducerList.listData
   }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    showDataFunc,
    deleteData
  },dispatch)
}
 
export default connect(mapStateToProps,mapDispatchToProps) (List) ;