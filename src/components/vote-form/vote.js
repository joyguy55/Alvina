import React from 'react'
import { connect } from 'react-redux'
import Form from './left/form.js'
import MovieSelection from './right/movie.js'

class Vote extends React.Component{

  render(){
    const props = this.props
    return(
      <div className="vote-container">
        <Form movieData={props.App.movieList}
              movieSelection={props.params.id}
        />
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
)(Vote)
