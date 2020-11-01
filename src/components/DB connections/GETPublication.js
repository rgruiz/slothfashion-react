import axios from 'axios'
import { URL_GETPUBLICATION } from '../../constants/URL'

const GETPublication = () => {

  let publications = new Promise(function (resolve, reject) {
    let salida = axios.get((URL_GETPUBLICATION), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if (res.status === 200) {
        return res.data
      }
    })
      .catch(function (err) {
        if (err.response) {
          alert(err.response.data)
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

  return publications

}

export default GETPublication;