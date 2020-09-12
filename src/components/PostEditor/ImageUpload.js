import React from 'react'
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

const Layout = ({ input, previews, dropzoneProps, files, extra: { maxFiles } }) => {
  return (
    <div>

      <div {...dropzoneProps} style={{overflow: 'auto'}}>
        {previews}
        {files.length < maxFiles && input}
      </div>

    </div>
  )
}

const CustomLayout = () => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' }) //a cambiar --> que el submit se bloquee?

  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
      inputContent="Arrastrá las fotos acá"
      accept="image/*"
    />
  )
}

export default CustomLayout