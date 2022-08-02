import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate1() {
  const { dispatch } = useContext( DataContext )

  function handleClick(){
    dispatch({type:'vote_candidate1'})
  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 1</button>
     </div>
  )
}
export default Candidate1;


