import React from 'react'
import { TextField } from 'material-ui'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../redux/actions/app-action.js'
import './style.scss'

const Search = (props) => {
  return(
    <div className="search-field">
     <TextField hintText="Search" fullWidth={true} onChange={ (e)=>{ props.callApi(e.target.value) } }/>
    </div>
   )
 }

 export default connect(
   state => ({}),
   dispatch => ( {...bindActionCreators(actions, dispatch)} )
 )(Search)
