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


class CustomLayout extends React.Component {
  /* const getUploadParams = () => ({ url: 'http://localhost:5000/add', header: 'Access-Control-Allow-Origin'}) //a cambiar --> que el submit se bloquee?
 */

  state = {
    file: ""
  }

  handleChangeStatus = ({ meta, file }, status) => {
    //a ser modificado usando el status. deberia modificar los datos de la lista en postform
    if (status === 'done') {
      this.props.addFiles(file, this.props.pos);
      this.setState({ file: file })
    }
    else
      if (status === 'removed') {
        this.props.removeFiles(this.props.pos);
        this.setState({ file: '' })
      }
  }

  componentDidMount() {
    const file = this.props.file === undefined ? '' : this.props.file
    this.setState({ file: file })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.file !== this.props.file) {
      const file = this.props.file === undefined ? '' : this.props.file
      this.setState({ file: file })
    }
  }

  render() {
    return (
      <Dropzone
        /* getUploadParams={getUploadParams} */
        LayoutComponent={Layout}
        inputContent="Arrastrá la foto acá"
        accept="image/*"
        onChangeStatus={this.handleChangeStatus}
        maxFiles={1}
        initialFiles={[this.state.file]}
        canRemove={true}
      />
    )
  }
}

export default CustomLayout