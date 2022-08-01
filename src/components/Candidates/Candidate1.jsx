import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate1() {
  const { votes, setVotes, singleVote1, setSingleVote1 } = useContext( DataContext )
 

  function handleClick(){
  setSingleVote1(singleVote1 + 1)
  setVotes(votes + 1)

  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 1</button>
     </div>
  )
}
export default Candidate1;


