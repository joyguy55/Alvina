import React from 'react'
import { connect } from 'react-redux'
import Description from './left/description.js'
import MovieList from './right/movie-list.js'
import Search from '../misc/search.js'

const Landing = (props) => {
    return(
      <div className="vote-form">
        <Search handleParam={ props.handleParam }/>
        <Description/>
        <MovieList movieList={ props.App.movieList }/>
      </div>
    )
}

export default connect(
    function mapStateToProps(store){
        return store
    },
)(Landing)
