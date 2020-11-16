import axios from 'axios'
import { URL_COMENTARIOS } from '../../constants/URL'

const POSTComment = (props) => {
 
  axios.post((URL_COMENTARIOS), props.comment, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': props.token,
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