import { createContext, useReducer } from "react";

export const DataContext = createContext()

const initialState ={
  candidate1:0,
  candidate2:0,
  candidate3:0,
  candidate4:0,
  total:0,
}

function reducer(state, action){
  
 switch (action.type) {
   case 'vote_candidate1':
     return { ...state, candidate1: state.candidate1 + 1, total: state.total + 1 };
    case 'vote_candidate2':
      return { ...state, candidate2: state.candidate2 + 1, total: state.total + 1  };
    case 'vote_candidate3':
        return { ...state, candidate3: state.candidate3 + 1, total: state.total + 1  };
    case 'vote_candidate4':
     return { ...state, candidate4: state.candidate4 + 1, total: state.total + 1  };
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
