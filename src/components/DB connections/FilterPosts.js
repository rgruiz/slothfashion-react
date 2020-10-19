
import axios from 'axios'
import { URL_FILTERPOSTS } from '../../constants/URL'

const FilterPosts = props => {

  const salida = axios.post((URL_FILTERPOSTS), props, {
    method: 'POST',
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
        Promise.reject(err.response.data)
      }
    }
    )

    return salida

}

export default FilterPosts