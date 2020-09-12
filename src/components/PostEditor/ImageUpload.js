import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

const Layout = ({ input, previews, dropzoneProps, files, extra: { maxFiles } }) => {
  return (
    <div>

      <div {...dropzoneProps} style={{ overflow: 'auto' }}>
        {previews}
        {files.length < maxFiles && input}
      </div>

    </div>
  )
}

const CustomLayout = (props) => {
  /* const getUploadParams = () => ({ url: 'http://localhost:5000/add', header: 'Access-Control-Allow-Origin'}) //a cambiar --> que el submit se bloquee?
 */
  const handleSubmit = (files, allFiles) => {
    alert("HANDLESUBMIT IMAGE")
    var lista = []
    files.map(f => lista.push(f));

    props.addFiles(lista);

    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  const handleChangeStatus = ({ meta, file }, status) => {
    //a ser modificado usando el status. deberia modificar los datos de la lista en postform
    console.log(status, meta, file);
    props.addFiles(file);
  }

  return (
    <Dropzone
      /* getUploadParams={getUploadParams} */
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      inputContent="Arrastrá las fotos acá"
      accept="image/*"
      onChangeStatus={handleChangeStatus}
    />
  )
}

export default CustomLayout