import React from 'react'
import './style.scss'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()  // this is hideous

const Form = (props) =>{
    const movie = props.movieData.filter( (item) => { // using filter because indexOf doesn't play great with explorer other option is Lodash
         return item.id.toString() === props.movieSelection } // double vs. triple equality ??
     )
    const description = movie[0].overview.substring(0, 200)
    return(
      <div className="description-container">
        <div className="description">
         <h4>{movie[0].title}</h4>
         <p>{description}...</p>
         <RaisedButton className="add" label="Add to Top-5" />
        </div>
      </div>
    )
}

export default Form


// can I extract the object from the Array more literally than is being
// accomplished in this instance ??
