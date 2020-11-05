import React from 'react'
import PostForm from '../components/PostEditor/PostForm'
import ChequearCookie from '../components/Cookies/ChequearCookie'

class EditPostPage extends React.Component {
  render() {
    const editPostPage = <PostForm type={"edit"} />
    return (ChequearCookie(editPostPage, '/'));
  }
}

export default EditPostPage