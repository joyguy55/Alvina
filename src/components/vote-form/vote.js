import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Form from './left/form.js'
import MovieSelection from './right/movie.js'
import * as actions from '../../redux/actions/app-action.js'

class Vote extends React.Component{

  render(){
    const props = this.props
    return(
      <div className="vote-container">
        <Form movieData={props.App.movieList}
              movieSelection={props.params.id}
              addMovie={props.addMovie}
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
  dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(Vote)
