import React from 'react'
import PostForm from '../components/PostEditor/PostForm'

class EditPostPage extends React.Component {
  render() {
    return (
        <PostForm type={"edit"} postId={11} />
    )
  }
}

export default EditPostPage