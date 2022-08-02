import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function IndividualVotes() {
  const { state } = useContext(DataContext)

  return (
    <div>
      <p>Candidate 1 Votes: {state.candidate1}</p>
      <p>Candidate 2 Votes: {state.candidate2}</p>
      <p>Candidate 3 Votes: {state.candidate3}</p>
      <p>Candidate 4 Votes: {state.candidate4}</p>
    </div>
  )
}

export default IndividualVotes;
