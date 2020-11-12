import React from 'react'
import DisplayTags from '../DisplayTags/DisplayTags'
import GETPopularTags from '../DB connections/GETPopularTags'

class TagsPopulares extends React.Component {

  state = {
    tags: []
  }

  async componentDidMount() {
    const popularTags = await GETPopularTags()
    this.setState({ ...this.state, tags: popularTags })

  }

  render() {
    return (
      this.state.tags !== undefined &&
      <div style={{display: "flex"}}><span className="mr-2">tags populares:</span><DisplayTags tags={this.state.tags} /></div>
    )
  }

}

export default TagsPopulares