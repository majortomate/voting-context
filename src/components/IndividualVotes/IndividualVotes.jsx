import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function IndividualVotes() {
  const {singleVote1, singleVote2, singleVote3, singleVote4} = useContext(DataContext)

  return (
    <div>
      <p>Candidate 1 Votes: {singleVote1}</p>
      <p>Candidate 2 Votes: {singleVote2}</p>
      <p>Candidate 3 Votes: {singleVote3}</p>
      <p>Candidate 4 Votes: {singleVote4}</p>
    </div>
  )
}

export default IndividualVotes
