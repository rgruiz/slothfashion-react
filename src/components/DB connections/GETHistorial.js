import axios from 'axios'
import { URL_HISTORIAL } from '../../constants/URL'

const GETHistorial = (props) => {

  const finalURL = URL_HISTORIAL + props.idusuario
  console.log(finalURL)
  let historial = new Promise(function (resolve, reject) {
    let salida = axios.get((finalURL), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token,
      }
    }).then(res => {
      if (res.status === 200) {
        return res.data
      }
    })
      .catch(function (err) {
        if (err.response) {
          reject(err.response.data)
        }
      }
      )
    if (salida !== undefined) {
      resolve(salida);
    }
    else {
      reject();
    }
  })

  return historial

}

export default GETHistorial;