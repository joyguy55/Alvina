import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import VoteForm from './components/vote-form/vote-form.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movieList: null,
      searchParam: 'Star+Wars'
    }
  }

  componentDidMount(){
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${this.state.searchParam}&page=1&include_adult=false`)
      .then((result)=>{
        this.setState({
          movieList: result
        });
        console.log(result)
      })
  }

  handleParam(value){
    this.setState({searchParam:value})
    this.componentDidMount()
  }

  render() {
    if(this.state.movieList === null){return null}
    return (
      <MuiThemeProvider>
        <div className="App">
          <VoteForm movieData={this.state.movieList.data.results}
                    handleParam={this.handleParam.bind(this)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
