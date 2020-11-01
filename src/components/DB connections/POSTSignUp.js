import axios from 'axios'
import { URL_SIGNUP } from '../../constants/URL'

const POSTSignUp = (props) => {
  // la contraparte esta hardcodeada en el link de compra en Publicacion -- deberia venir de la cookie

  axios.post((URL_SIGNUP), props, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    if (res.status === 200) {
      alert("¡Gracias por registrarte!")
      window.location = '/'
    }
  })
    .catch(function (err) {
      if (err.response) {
        alert(err.response.data)
      }
    })
}

export default POSTSignUp;