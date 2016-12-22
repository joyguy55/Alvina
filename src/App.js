import React, { Component } from 'react'
import './App.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Navigation from './components/navigation.js'
import * as actions from './redux/actions/app-action.js'

class App extends Component {

  componentWillMount(){
    this.props.callApi('Star+Wars')
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navigation/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(
  // function mapStateToProps(state){
  //   return state},
  state => ({}),
  dispatch => ( {...bindActionCreators(actions, dispatch)} )
  // function mapDispatchToProps(dispatch){
  //   return bindActionCreators(actions, dispatch)},
)(App)
