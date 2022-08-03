import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

function TotalVotes() {
  const { state } = useContext( DataContext )

  return (
    <h2>Total Votes: {state.total} </h2>
  )
}

export default TotalVotes;
