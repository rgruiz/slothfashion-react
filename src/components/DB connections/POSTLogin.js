import axios from 'axios'
import { URL_LOGIN } from '../../constants/URL'
import Cookies from 'universal-cookie'
import SimpleCrypto from "simple-crypto-js"
import { SecretKey } from '../../constants/SecretKey'
import { cookieName } from '../../constants/Cookie'

const POSTLogin = props => {
  const data = {
    "mail": props.mail,
    "password": props.password,
  }

  var dataUsuario = new FormData();
  dataUsuario.append('data', JSON.stringify(data));

  const BakeCookies = (props) => {
    const cookies = new Cookies();
    const date = Date.now() + 2560000000;
    cookies.set('timeout', date, { path: '/' });

    const simpleCrypto = new SimpleCrypto({ SecretKey })
    const cookie = simpleCrypto.encrypt(props.data)
    
    cookies.set(cookieName, cookie, { path: '/' });

    window.location = '/'

  }

  return axios.post((URL_LOGIN), dataUsuario, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }).then(res => {
    if (res.status === 200) {
      alert("Bienvenido a SlothFashion " + res.data.nombre)
      return (BakeCookies(res.data))
    }
  })
    .catch(function (err) {

      if (err.response) {
        alert(err.response.data)
        Promise.reject(err.response.data)
      }
    }
    )
}

export default POSTLogin;