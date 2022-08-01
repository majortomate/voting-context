import { createContext, useState } from "react";

export const DataContext = createContext()


export const DataProvider = ({ children }) =>{

  const [votes, setVotes] = useState(0)
  const [singleVote1, setSingleVote1] = useState(0)
  const [singleVote2, setSingleVote2] = useState(0)
  const [singleVote3, setSingleVote3] = useState(0)
  const [singleVote4, setSingleVote4] = useState(0)

  const store = {
    singleVote1,
    setSingleVote1,
    singleVote2,
    setSingleVote2,
    singleVote3,
    setSingleVote3,
    singleVote4,
    setSingleVote4,
    votes,
    setVotes
  }

  return (
    <DataContext.Provider value={ store }>
      { children }
    </DataContext.Provider>
  )
}
