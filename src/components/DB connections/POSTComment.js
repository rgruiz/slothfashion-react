import axios from 'axios'
import { URL_COMENTARIOS } from '../../constants/URL'

const POSTComment = (props) => {
  // la contraparte esta hardcodeada en el link de compra en Publicacion -- deberia venir de la cookie
  
  axios.post((URL_COMENTARIOS), props, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    if (res.status === 200) {
      alert("¡Gracias por dejar un comentario!")
      return window.location.reload()
    }
  })
    .catch(function (err) {
      if (err.response) {
        alert(err.response.data)
      }
    })
}

export default POSTComment;