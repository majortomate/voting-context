import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function IndividualVotes() {
  const { state } = useContext(DataContext)
  const {total, percentage, ...candidates } = state
  let values = Object.values(candidates)

  return (
    <div>
    {
      !percentage ?
      values.map((candidate, index) => candidate.visible ?
        <p style={{fontWeight:"400"}}key={index}>{`Candidate # ${index + 1}: ${candidate.votes}`}</p>
        :null) :
        values.map((candidate, index) => candidate.visible ?
        <p key={index}>{`Candidate ${index + 1}: ${ candidate.votes ? Math.floor((candidate.votes/total)*100) : 0} %`}</p>
        :null)
    }
    </div>
  )
}

export default IndividualVotes;
