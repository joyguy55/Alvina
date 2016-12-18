import React from 'react'
import Description from './left/description.js'
import MovieList from './right/movie-list.js'
import Search from '../misc/search.js'
import axios from 'axios'

class Landing extends React.Component{
  constructor(props){
    super(props)
    this.state={
      movieList: null,
      searchParam: 'Star+Wars'
    }
  }

  callAPI(){
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${this.state.searchParam}&page=1&include_adult=false`)
      .then((result)=>{
        this.setState({
          movieList: result
        })
      })
  }

  componentDidMount(){
    this.callAPI()
  }

  handleParam(value){
    let newValue = value.replace(/ /g, '+')
    console.log(newValue)
    this.setState({searchParam:newValue})
    this.callAPI()
  }

  render(){
    if(this.state.movieList === null){return null}
    return(
      <div className="vote-form">
        <Search handleParam={ this.handleParam.bind(this) }/>
        <Description/>
        <MovieList movieData={ this.state.movieList.data.results }/>
      </div>
    )
  }

}

export default Landing
