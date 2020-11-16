import axios from 'axios'
import { URL_MERCADOPAGO } from '../../constants/URL'

const GETMercadoPagoLink = (props) => {

  const salida = axios.post((URL_MERCADOPAGO), props.mpLinkData, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': props.token,
    }
  })
    .then(function (res) {
      if (res.status === 200) {
        return res.data
      }
    })
    .catch(function (err) {
      if (err.response) {
        alert("Hubo un error conectándose a MercadoPago")
        Promise.reject(err.response)
      }
    })

  return salida
}

export default GETMercadoPagoLink;