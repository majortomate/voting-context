import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

function TotalVotes() {
  const { state, dispatch } = useContext( DataContext )

  return (
    <>
      <h2>Total Votes: {state.total} </h2>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  )
}

export default TotalVotes;
