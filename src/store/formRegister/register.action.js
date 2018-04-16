import db from '../../firebase';
import swal from 'sweetalert';
const bcryptjs = require('bcryptjs')
const saltRounds = 10

export const register = (data) => {
  return dispatch => {
    let salt = bcryptjs.genSaltSync(saltRounds);
    let hash = bcryptjs.hashSync(data.password, salt)
    let userRegister = {
      username: data.username,
      email: data.email,
      password: hash
    }
    return db.ref('password-manager-user').push(userRegister).then(data =>{
      localStorage.setItem('userid',data.key)
      localStorage.setItem('login',true)
      swal("Register success!", "register data complete", "success")
    } )
  }
}

