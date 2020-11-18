import { URL_AWSFILES } from '../../constants/URL'

async function TransformPostData(props) {
  async function imageData(img) {
    var imageData = undefined
    if (img !== undefined) {
      const imgURL = URL_AWSFILES + img.imagen

      const ext = img.imagen.split(".")
      const type = 'image/'+ext[1]

      const data = await fetch(imgURL)
        .then(async res => {
          const salida = await res.arrayBuffer()
            .then(buf => {
              imageData = new File([buf], img.imagen, { type: type })
              return imageData
            })
          return salida
        }).catch(() => {return imageData})
      return data
    }
    if (imageData !== undefined && imageData.length > 1) {
      return imageData[1]
    }
    else return imageData
  }

  function transformTags(tags) {
    var salida = ""
    tags.forEach(tag => salida += tag.etiqueta + " ")
    return salida.substring(0, salida.length - 1)
  }

  const salida = {
    description: props.post.descripcion,
    price: props.post.precio,
    tags: transformTags(props.tags),
    active: props.post.estado === "activo",
    imagesModified: false,
    file1: await imageData(props.images[0]),
    file2: await imageData(props.images[1]),
    file3: await imageData(props.images[2]),
    file4: await imageData(props.images[3]),
    postId: props.post.idpublicacion,
    poster: props.post.poster,
  }

  return salida

}

export default TransformPostData