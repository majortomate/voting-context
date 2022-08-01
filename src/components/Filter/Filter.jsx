import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import IndividualVotes from "../IndividualVotes/IndividualVotes";



function Filter() {

  const {singleVote1, singleVote2, singleVote3, singleVote4} = useContext(DataContext)
  const [filterType, setFilterType] = useState("")
  const [showCandidate, setShowCandidate] = useState(false)

  const allVotes = [singleVote1, singleVote2, singleVote3, singleVote4]

  function filterByPercentage(e){
    if(e.target.value === "percentage"){
      const totalSum = allVotes.reduce((prev,current) => prev + current)
      const percentaged = allVotes.map(item => Math.floor((item / totalSum) *100) + "%")
      return setFilterType(percentaged.join());
    } else{
      return setFilterType(allVotes.join())
    }
    }

    function filterByCandidate(e){
       return allVotes.map(item => item === e.target.value && setShowCandidate(true))
    }
    

  return (
    <div>
      <form action="">
        <select name="filterType" id="filterType" onChange={filterByPercentage}>
          <option value="">Please select</option>
          <option value="percentage">Percentage</option>
          <option value="numerical">Numerical</option>
        </select>
        <select name="candidate" id="candidate" onChange={filterByCandidate}>
          <option value={singleVote1}>Candidate 1</option>
          <option value={singleVote2}>Candidate 2</option>
          <option value={singleVote3}>Candidate 3</option>
          <option value={singleVote4}>Candidate 4</option>
        </select>
        <button type="submit">Filter</button>
      </form>
      <div>
      {showCandidate}
      {filterType}
      <IndividualVotes/>
      </div>
    </div>
  )
}

export default Filter
