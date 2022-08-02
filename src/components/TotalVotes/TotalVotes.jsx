import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

function TotalVotes() {

  const { state } = useContext( DataContext )


  return (

    <div>Total Votes: {state.total} </div>
  )
}

export default TotalVotes;
