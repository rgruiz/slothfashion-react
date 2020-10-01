import axios from 'axios'
import { URL_MERCADOPAGO } from '../../constants/URL'

const GETMercadoPagoLink = props => {

  const salida = axios.post((URL_MERCADOPAGO), props, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
      }
    })

  return salida
}

export default GETMercadoPagoLink;