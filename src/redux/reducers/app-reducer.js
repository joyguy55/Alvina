

const initial = {
 movieList: [],
 rankList: []
}

function App( state = initial, action){
  const actions = {
    'RECEIVED_DATA': () => {
     return { ...state, 'movieList': action.payload }
    },
    'ADD_MOVIE': () => {
     return { ...state, 'rankList': [...state.rankList, action.payload] }
    }
  }
  return actions[action.type] ? actions[action.type]() : state
}

export default App
