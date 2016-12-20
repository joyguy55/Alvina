import axios from 'axios'

// export const receiveData = (res) => {
//   console.log(res.data.results)
//   return{
//     type: 'REC_DATA',
//     movieList: res.data.results
//   }
// }

export const callApi = (searchParam) => {
   return (dispatch)=>{
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${searchParam}&page=1&include_adult=false`)
      .then((res)=>{
        dispatch({type:'RECEIVED_DATA', payload: [...res.data.results]})
      })
   }
}

// constructor(props){
//   super(props)
//   this.state={
//     movieList: null,
//     searchParam: 'Star+Wars'
//   }
// }

// callAPI(){
//   axios
//     .get(`https://api.themoviedb.org/3/search/movie?api_key=0f0bbfb38d44aef5ee75cc44b80f0795&language=en-US&query=${this.state.searchParam}&page=1&include_adult=false`)
//     .then((result)=>{
//       this.setState({
//         movieList: result
//       })
//     })
// }
//
// componentDidMount(){
//   this.callAPI()
// }
//
// handleParam(value){
//   let newValue = value.replace(/ /g, '+')
//   this.setState({searchParam:newValue})
//   this.callAPI()
// }
