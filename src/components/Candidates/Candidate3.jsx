import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate3() {
  const { dispatch } = useContext( DataContext )

  function handleClick(){
    dispatch({type:'vote_candidate3'})
  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 3</button>
     </div>
  )
}
export default Candidate3;


