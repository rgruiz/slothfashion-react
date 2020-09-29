import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

const Layout = ({ input, previews, dropzoneProps, files }) => {
  return (
    <div>

      <div {...dropzoneProps} style={{ overflow: 'auto' }}>
        {previews}
        {files.length < 1 && input}
      </div>

    </div>
  )
}

const CustomLayout = (props) => {
  /* const getUploadParams = () => ({ url: 'http://localhost:5000/add', header: 'Access-Control-Allow-Origin'}) //a cambiar --> que el submit se bloquee?
 */

  const handleChangeStatus = ({ meta, file }, status) => {
    //a ser modificado usando el status. deberia modificar los datos de la lista en postform
    if (status === 'done') {
      props.addFiles(file, props.pos);
    }
    else 
    if (status === 'removed') {
      props.removeFiles(file, props.pos);
    }
    console.log(status, meta, file);
  }

  return (
    <Dropzone
      /* getUploadParams={getUploadParams} */
      LayoutComponent={Layout}
      inputContent="Arrastrá la foto acá"
      accept="image/*"
      onChangeStatus={handleChangeStatus}
      maxFiles={1}
    />
  )
}

export default CustomLayout