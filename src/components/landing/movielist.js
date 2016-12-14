import React from 'react'
import './style.css'

const MovieList= (props) =>{
    const movieArr = [...props.movieData].slice(0,-(12-props.movieData.length))
    return(
      <div className="movie-container">
        {
            movieArr.map((obj,index)=>{
                return(
                    <img key={obj.id} src={`https://image.tmdb.org/t/p/w92//${movieArr[index].poster_path}`}/>
                )
            })
        }
      </div>
    )
}

export default MovieList
