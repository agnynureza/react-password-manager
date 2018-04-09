import db from '../../firebase';
import moment from 'moment';
import swal from 'sweetalert';

export const addPassword = data => {
  return dispatch => {
    let userData = {
      url: data.url,
      username_email: data.username_email,
      password: data.password,
      createdAt: moment().format('LL'),
      updatedAt: ''
    }
    db.ref('password-manager').push(userData)
    swal("Save success!", "saving data successfully", "success")
  }
} 
