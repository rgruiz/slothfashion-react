import axios from 'axios'
import { URL_GETPOSTBYID } from '../../constants/URL'

const GETPostByID = props => {

  const finalurl = URL_GETPOSTBYID + props

  let postData = new Promise(function (resolve, reject) {
    let salida = axios.get((finalurl), {
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

  return postData

}

export default GETPostByID;