import React from 'react'
import { connect } from 'react-redux'
import Description from './left/description.js'
import MovieSelection from './right/movie.js'
import Search from '../misc/search.js'

class VoteForm extends React.Component{

  render(){
    const props = this.props
    console.log(props)
    return(
      <div className="vote-form">
        <Search handleParam={props.handleParam}/>
        <Description movieData={props.movieData}/>
        <MovieSelection movieData={props.App.movieList}
                        movieSelection={props.params.id}
        />
      </div>
    )
  }

}

export default connect(
    function mapStateToProps(store){
        return store
    },
)(VoteForm)
