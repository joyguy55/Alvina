

const initial ={
 movieList:[]
}

function App( state = initial, action){
  const actions = {
    'RECEIVED_DATA': () => {
     return { ...state, 'movieList': action.payload }
    }
  }
  return actions[action.type] ? actions[action.type]() : state
}

export default App
