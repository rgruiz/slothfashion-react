import React from 'react'
import PostForm from '../components/PostEditor/PostForm'
import ChequearCookie from '../components/Cookies/ChequearCookie'

class NewPostPage extends React.Component {
  render() {
    const newPostPage = <PostForm/>
    return (ChequearCookie(newPostPage, '/'));
  }
}

export default NewPostPage