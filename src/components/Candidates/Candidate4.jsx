import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate4() {
  const { dispatch } = useContext( DataContext )

  function handleClick(){
    dispatch({type:'vote_candidate4'})
  }

   return (
     <div>
       <button onClick={handleClick}>Candidate 4</button>
     </div>
  )
}
export default Candidate4;


