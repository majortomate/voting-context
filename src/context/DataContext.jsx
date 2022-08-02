import { createContext, useReducer } from "react";

export const DataContext = createContext()

const initialState ={
  candidate1:{
    votes:0,
    visible:false
  },
  candidate2:{
    votes:0,
    visible:false
  },
  candidate3:{
    votes:0,
    visible:false
  },
  candidate4:{
    votes:0,
    visible:false
  },
  total:0,
  percentage:0,
}

function reducer(state, action){
  
 switch (action.type) {
   case 'vote_candidate1':
     return { ...state, candidate1: {...state.candidate1, votes: state.candidate1.votes  + 1}, total: state.total + 1 };
    case 'vote_candidate2':
      return { ...state, candidate2: {...state.candidate2, votes: state.candidate2.votes  + 1}, total: state.total + 1 };
    case 'vote_candidate3':
        return { ...state, candidate3: {...state.candidate3, votes: state.candidate3.votes  + 1}, total: state.total + 1 };
    case 'vote_candidate4':
     return { ...state, candidate4: {...state.candidate4, votes: state.candidate4.votes  + 1}, total: state.total + 1 };
    case 'total':
      return state.total;
   default:
     return state;
 }
}



export const DataProvider = ({ children }) =>{
  const [state, dispatch] = useReducer(reducer, initialState)

  const store = {
    state,
    dispatch,
  }

  return (
    <DataContext.Provider value={ store }>
      { children }
    </DataContext.Provider>
  )
}
