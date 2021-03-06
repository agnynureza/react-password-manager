import { SHOW_DATA_PASSWORD } from "./list.actionType";
import db from '../../firebase';
import moment from 'moment';
import swal from 'sweetalert';

export const showDataFunc = payload => {
  return dispatch => {
    return db.ref('password-manager').on('value', function(data){
      const firebase = Object.keys(data.val()).map(list => ({
        id: list,
        val: data.val()[list]
      }))
      dispatch(showData(firebase))
    }, function(err){
      console.log(`error read data ${err.code}`)
    })
  }
}

export const deleteData = payload => {
  return dispatch => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    })
    .then(willDelete => {
        db.ref('password-manager').child(payload).remove()
    })
  }
}

export const updatePassword = payload => {
  return dispatch => {
    db.ref('password-manager').child(payload.id).update({
      password: payload.newPassword,
      updatedAt: moment().format('LL')
    })
    swal("Edit success!", "edit data successfully", "success");
  }
}

export const searchData = payload => {
  return dispatch => {
    db.ref('password-manager').on('value',function(data){
      const firebase = Object.keys(data.val()).map(list => ({
        id: list,
        val: data.val()[list]
      }))
      const find = firebase.filter(search => {
        return search.val.url.toLowerCase().indexOf(payload.toLowerCase()) !== -1 })
      dispatch(showData(find))  
    },function(err){
      console.log(`error find data ${err}`)
    })
  }
}


const showData = payload => {
  return {
    type: SHOW_DATA_PASSWORD,
    payload: payload 
  }
}