import React, { Component } from 'react'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Navigation from './components/navigation.js'

class App extends Component {
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

export default App;
