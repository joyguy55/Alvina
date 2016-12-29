import React from 'react'
import { connect } from 'react-redux'
import Avatar from 'material-ui/Avatar'
import Subheader from 'material-ui/Subheader'
import { List, ListItem } from 'material-ui/List';
import './style.scss'

const RankChart = (props) =>{
    console.log(props)
    const rankList = props.App.rankList
    return(
      <div className="rank-container">
        <List>
         <Subheader className="subheader" >Action Titles</Subheader>
        {
          rankList.map( (obj)=>{
            return(
                <ListItem
                  className="rank-item"
                  key={obj.id}
                  primaryText={obj.title}
                  leftAvatar={<Avatar src={`https://image.tmdb.org/t/p/w342//${obj.poster_path}`}/>}
                >
                </ListItem >
            )
          })
        }
        </List>
      </div>
    )
}

export default connect(
  function mapStateToProps(store){
     return store
  },
  // dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(RankChart)
