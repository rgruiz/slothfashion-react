import axios from 'axios'
import { URL_POPULARTAGS } from '../../constants/URL'

const GETPopularTags = () => {

  let tags = new Promise(function (resolve, reject) {
    let salida = axios.get((URL_POPULARTAGS), {
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

  return tags

}

export default GETPopularTags;