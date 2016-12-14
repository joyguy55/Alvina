import React from 'react'
import Description from './left/description.js'
import MovieSelection from './right/movie.js'

class VoteForm extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="description">
        <Description movieData={this.props.movieData}/>
        <MovieSelection movieData={this.props.movieData}/>
      </div>
    )
  }

}

export default VoteForm
