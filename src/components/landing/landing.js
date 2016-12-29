import React from 'react'
import { connect } from 'react-redux'
import LandCTA from './left/description.js'
import MovieList from './right/movie-list.js'

const Landing = (props) => {
    return(
      <div className="vote-form">
        <LandCTA />
        <MovieList movieList={ props.App.movieList }/>
      </div>
    )
}

export default connect(
    function mapStateToProps(store){
        return store
    },
)(Landing)
