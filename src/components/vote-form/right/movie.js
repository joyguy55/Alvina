import React from 'react'
import './style.scss'

const MovieSelection= (props) =>{
    const movie = props.movieData.filter( (item) => {
         return item.id.toString() === props.movieSelection } // double vs. triple equality ??
     )
    return(
      <div className="movies-display">
          <img className="selected-img"
               key={movie.id}
               src={`https://image.tmdb.org/t/p/w342//${movie[0].poster_path}`}/>
      </div>
    )
}

export default MovieSelection
