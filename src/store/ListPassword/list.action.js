import { SHOW_DATA_PASSWORD } from "./list.actionType";
import db from '../../firebase';
import moment from 'moment';
import swal from 'sweetalert';

export const showDataFunc = payload => {
  return dispatch => {
    db.ref('password-manager').on('value', function(data){
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
      if(willDelete){
        swal("your data has been deleted",{
          icons: "success"
        });
        db.ref('password-manager').child(payload).remove()
      }else{
        swal("Your file is safe")
      }
    })
  }
}

export const updatePassword = payload => {
  return dispatch => {
    console.log('masuk ----------------->')
    console.log(payload)
    db.ref('password-manager').child(payload.id).update({
      password: payload.newPassword,
      updatedAt: moment().format('LL')
    })
    swal("Edit success!", "edit data successfully", "success");
}

}

const showData = payload => {
  return {
    type: SHOW_DATA_PASSWORD,
    payload: payload 
  }
}