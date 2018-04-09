import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {searchData,showDataFunc} from '../store/ListPassword/list.action';

class Search extends Component {

  searchUrl = event => {
    let payload = event.target.value
    if(event.target.value.length > 0){
      this.props.searchData(payload)
    }else{
      this.props.showDataFunc()
    }
  }

  render() { 
    return (
    <div>
      <label htmlFor="" onChange={this.searchUrl} className="float-left ml-3">Search Data: <input type="text" placeholder="url"/></label>
    </div> 
     )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    searchData,
    showDataFunc
  },dispatch)
}

 
export default connect(null,mapDispatchToProps)(Search) ;