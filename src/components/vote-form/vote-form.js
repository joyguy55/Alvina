import React from 'react'
import Description from './left/description.js'
import MovieSelection from './right/movie.js'
import Search from './left/search.js'

class VoteForm extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="vote-form">
        <Search handleParam={this.props.handleParam}/>
        <Description movieData={this.props.movieData}/>
        <MovieSelection movieData={this.props.movieData}/>
      </div>
    )
  }

}

export default VoteForm
