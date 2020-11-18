import React from 'react'
import GETPublication from '../DB connections/GETPublication'
import PostThumbHome from '../PostThumb/PostThumbHome'
import Slider from './Slider'

class Home extends React.Component {
  state = {
    
}
  
async componentDidMount() {

  
    const postData = await GETPublication()
    this.setState({ ...this.state, post: postData })

}

render() {
    if (this.state.post !== undefined) {
        return (
          <>
          <Slider></Slider>
            <PostThumbHome post = {this.state.post}/>
          </>
        )
    }
    else return (<></>)
}
}

export default Home