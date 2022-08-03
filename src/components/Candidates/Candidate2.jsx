import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Candidate2() {
  const { dispatch } = useContext( DataContext )

  function handleClick(){
    dispatch({type:'vote_candidate2'})
  }

   return (
     <>
       <button onClick={handleClick}>Candidate 2</button>
     </>
  )
}
export default Candidate2;

