import React from 'react'
import './style.css'

const Description= (props) =>{
    const movieArr = props.movieData
    return(
      <div className="description-container">
        <h4>{ movieArr[0].title }</h4>
        <p>{ movieArr[0].overview }</p>
      </div>
    )
}

export default Description
