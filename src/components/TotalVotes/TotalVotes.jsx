import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'

function TotalVotes() {

  const {votes} = useContext(DataContext)
  return (
    <div>Total Votes: {votes}</div>
  )
}

export default TotalVotes
