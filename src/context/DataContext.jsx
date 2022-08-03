import { createContext, useReducer } from "react";

export const DataContext = createContext()

const initialState ={
  candidate1:{
    votes:0,
    visible:false,
  },
  candidate2:{
    votes:0,
    visible:false,
  },
  candidate3:{
    votes:0,
    visible:false,
  },
  candidate4:{
    votes:0,
    visible:false,
  },
  total:0,
  percentage:false,
}

function reducer(state, action){
  const { candidate1, candidate2, candidate3, candidate4, total, percentage } = state
 switch (action.type) {
   case 'vote_candidate1':
     return { ...state, candidate1: {...state.candidate1, votes: candidate1.votes  + 1}, total: total + 1 };
    case 'vote_candidate2':
      return { ...state, candidate2: {...state.candidate2, votes: candidate2.votes  + 1}, total: total + 1 };
    case 'vote_candidate3':
      return { ...state, candidate3: {...state.candidate3, votes: candidate3.votes  + 1}, total: total + 1 };
    case 'vote_candidate4':
      return { ...state, candidate4: {...state.candidate4, votes: candidate4.votes  + 1}, total: total + 1 };
    case 'show_candidate1':
      return { ...state, candidate1: {...state.candidate1, visible: !candidate1.visible}};
    case 'show_candidate2':
      return { ...state, candidate2: {...state.candidate2, visible: !candidate2.visible}};
    case 'show_candidate3':
      return { ...state, candidate3: {...state.candidate3, visible: !candidate3.visible}}; 
    case 'show_candidate4':
      return { ...state, candidate4: {...state.candidate4, visible: !candidate4.visible}};
    case 'percentage':
      return { ...state, percentage: !percentage};   
    case 'total':
      return total;
    case 'reset':
      return window.location.reload();
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
