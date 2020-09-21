import axios from 'axios'
import { URL_MERCADOPAGO } from '../../constants/URL'

const POSTMercadoPago = props => {
  const data = {
    list: [
      //esta lista deberia completarse con los datos de props de la publicacion
      {
        "title": "Mi pequeño pony",
        "unit_price": 99988,
        "quantity": 1
      }
    ]
  }

  const salida = axios.post((URL_MERCADOPAGO), data, {
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
        if (err.response.status !== 500) {
          alert(err.response.data.message);
        } else {
          alert("No se puede conectar con la base de datos")
        }
      }
    })

    return salida
}

export default POSTMercadoPago;