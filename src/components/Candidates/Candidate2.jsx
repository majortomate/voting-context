import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate2() {
  const { votes, setVotes, singleVote2, setSingleVote2 } = useContext( DataContext )

  function handleClick(){
  setSingleVote2(singleVote2 + 1)
  setVotes(votes + 1)

  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 2</button>
     </div>
  )
}
export default Candidate2;

