import React from 'react'
import './style.css'

const Description= (props) =>{
    const movieArr = props.movieData
    return(
      <div className="description-container">
        <div className="description">
          <h4>{ movieArr[0].title }</h4>
          <p>{ movieArr[0].overview }</p>
        </div>
      </div>
    )
}

export default Description
