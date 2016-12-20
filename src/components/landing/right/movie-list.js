import React from 'react'
import './style.css'
import { Link } from 'react-router'

const MovieList= (props) => {
    const movieArr1 = [...props.movieList].slice(0,-(16-props.movieList.length))
    const movieArr2 = [...props.movieList].slice(4,-(12-props.movieList.length))
    return(
      <div className="movies-container">
        <div className="col1">
        {
          movieArr1.map((obj,index)=>{
            return(
              <div key={obj.id} className="movie-container">
                <Link to={'/vote-form'} >
                    <img className="img-circle"
                         key={obj.id}
                         onClick={ ()=>{} }
                         src={`https://image.tmdb.org/t/p/w342//${movieArr1[index].poster_path}`}/>
                </Link>
              </div>
            )
          })
        }
        </div>
        <div className="col2">
        {
          movieArr2.map((obj,index)=>{
            return(
              <div key={obj.id} className="movie-container">
                <Link to={'/vote-form'} >
                    <img className="img-circle"
                         key={obj.id}
                         onClick={ ()=>{} }
                         src={`https://image.tmdb.org/t/p/w342//${movieArr2[index].poster_path}`}/>
                </Link>
              </div>
            )
          })
        }
        </div>
      </div>
    )
}

export default MovieList
