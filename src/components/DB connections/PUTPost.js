import axios from 'axios'
import { URL_EDITPOST } from '../../constants/URL'

const PUTPost = props => {
  const active = props.active ? 'activo' : 'inactivo'
  const data = {
    "description": props.description,
    "price": props.price,
    "tags": props.tags,
    "active": active,
    "poster": props.poster,
    "imagesModified": props.imagesModified,
    "postId": props.postId
  }

  var archivos = new FormData();
  if (props.file1 !== "" && props.imagesModified && props.file1 !== undefined) {
    archivos.append('file1', props.file1, props.file1.fileName);
  }
  if (props.file2 !== "" && props.imagesModified && props.file2 !== undefined) {
    archivos.append('file2', props.file2, props.file2.fileName);
  }
  if (props.file3 !== "" && props.imagesModified && props.file3 !== undefined) {
    archivos.append('file3', props.file3, props.file3.fileName);
  }
  if (props.file4 !== "" && props.imagesModified && props.file4 !== undefined) {
    archivos.append('file4', props.file4, props.file4.fileName);
  }

  archivos.append('data', JSON.stringify(data));

  axios.patch((URL_EDITPOST), archivos, {
    method: 'PATCH',
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

export default PUTPost;