import axios from 'axios'
import { URL_HACERCOMPRA } from '../../constants/URL'

const POSTHacerCompra = (props) => {

  axios.post((URL_HACERCOMPRA), props, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(res => {
    if (res.status === 200) {
      alert("¡Gracias por tu compra!")
      window.location = '/historial'
    }
  })
    .catch(function (err) {
      if (err.response) {
        alert(err.response.data)
      }
    })
}

export default POSTHacerCompra;