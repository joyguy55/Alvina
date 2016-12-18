import React from 'react'
import { TextField } from 'material-ui'
import './style.css'

const Search = (props) => {
  return(
    <div className="search-field">
     <TextField hintText="Search" onChange={ (e)=>{ props.handleParam(e.target.value) } }/>
    </div>
   )
 }

 export default Search
