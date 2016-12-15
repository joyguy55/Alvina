import React from 'react'
import { TextField, FlatButton } from 'material-ui'
import './style.css'

const Search = (props) => {

 return(
   <div className="text-field">
    <TextField hintText="Search" onChange={ (e)=>{ props.handleParam(e.target.value) } }/>
    <FlatButton className="submit-search" label="Submit Search" onTouchTap={ props.submitSearch() }/>
   </div>
  )
 }

 export default Search
