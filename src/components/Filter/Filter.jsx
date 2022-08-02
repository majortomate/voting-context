import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";




function Filter() {

  const { state } = useContext(DataContext)
  const {total, percentage, ...candidates } = state
  const {display, setDisplay} = useState(false)
  let values = Object.values(candidates)
    
  function handleCandidateVote1(e){
   // eslint-disable-next-line no-unused-expressions
   e.target.checked &&  { ...candidates, candidate1: {...state.candidate1, visible: true}}
  }


  return (
    <div>
        <p>Filter by Type</p>
          <input type="radio" name="filterByType" id="percentage" value="percentage" />
          <label htmlFor="percentage">Percentage</label>
          <input type="radio" name="filterByType" id="numerical" value="numerical" />
          <label htmlFor="numerical">Numerical</label>
        <p>Filter by Candidate</p>
            <div>
              <input type="checkbox" id="candidate1" onChange={handleCandidateVote1}/>
              <label htmlFor="candidate1">Candidate 1</label>
            </div>
            <div>
              <input type="checkbox" id="candidate2"/>
              <label htmlFor="candidate2">Candidate 2</label>
            </div>
            <div>
              <input type="checkbox" id="candidate3"/>
              <label htmlFor="candidate3">Candidate 3</label>
            </div>
            <div>
              <input type="checkbox" id="candidate4"/>
              <label htmlFor="candidate4">Candidate 4</label>
            </div>
    </div>
  )
}

export default Filter;
