import axios from 'axios'
import { URL_FILTERTAGS } from '../../constants/URL'

const FilterTags = props => {

  const finalurl = URL_FILTERTAGS + props

  let tags = new Promise(function (resolve, reject) {
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

  return tags

}

export default FilterTags;