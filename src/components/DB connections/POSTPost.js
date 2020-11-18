import axios from 'axios'
import { URL_ADDPOST } from '../../constants/URL'

const POSTPost = props => {
  const active = props.active ? 'activo' : 'inactivo'
  const data = {
    "description": props.description,
    "price": props.price,
    "tags": props.tags,
    "active": active,
    "poster": props.postuserId
  }

  var archivos = new FormData();
  if (props.file1 !== "") {
    archivos.append('file1', props.file1, props.file1.fileName);
  }
  if (props.file2 !== "") {
    archivos.append('file2', props.file2, props.file2.fileName);
  }
  if (props.file3 !== "") {
    archivos.append('file3', props.file3, props.file3.fileName);
  }
  if (props.file4 !== "") {
    archivos.append('file4', props.file4, props.file4.fileName);
  }

  archivos.append('data', JSON.stringify(data));

  axios.post((URL_ADDPOST), archivos, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': props.token,
    }
  }).then(res => {
    if (res.status === 200) {
      alert("La publicación fue guardada con éxito")
      return window.location = '/historial'
    }
  })
    .catch(function (err) {

      if (err.response) {
        alert(err.response.data)
        Promise.reject(err.response.data)
      }
    }
    )
}

export default POSTPost;