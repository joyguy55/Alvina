import React from 'react'
import './style.css'

const MovieSelection= (props) =>{
    const movie = props.movieData.filter( (item) => {
         return item.id == props.movieSelection }
     )
    console.log(movie)
    return(
      <div className="movies-display">
          <img className="selected-img"
               key={movie.id}
               src={`https://image.tmdb.org/t/p/w342//${movie[0].poster_path}`}/>
      </div>
    )
}

export default MovieSelection

//<img src={`https://image.tmdb.org/t/p/w342//${movieArr1[index].poster_path}`}/>

// <img className="img-circle"
//      key={.id}
//      src={`https://image.tmdb.org/t/p/w342//${movieArr1[index].poster_path}`}/>
