import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate3() {
  const { votes, setVotes, singleVote3, setSingleVote3 } = useContext( DataContext )

  function handleClick(){
  setSingleVote3(singleVote3 + 1)
  setVotes(votes + 1)

  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 3</button>
     </div>
  )
}
export default Candidate3;


