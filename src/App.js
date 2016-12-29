import React, { Component } from 'react'
import './App.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navigation from './components/navigation.js'
import * as actions from './redux/actions/app-action.js'
import Search from './components/misc/search.js'

class App extends Component {

  componentWillMount(){
    this.props.callApi('Star+Wars')
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        <div className="container">
          <div className="logo">Logo</div>
          <Search handleParam={ this.props.handleParam }/>
        </div>
        <Navigation/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  function mapStateToProps(store){
     return store
  },
  dispatch => ( {...bindActionCreators(actions, dispatch)} )
)(App)
