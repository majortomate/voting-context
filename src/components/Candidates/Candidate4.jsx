import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate4() {
  const { votes, setVotes, singleVote4, setSingleVote4 } = useContext( DataContext )

  function handleClick(){
  setSingleVote4(singleVote4 + 1)
  setVotes(votes + 1)

  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 4</button>
     </div>
  )
}
export default Candidate4;


