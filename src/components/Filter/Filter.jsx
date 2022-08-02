import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";




function Filter() {

  const { state } = useContext(DataContext)
  const [filterType, setFilterType] = useState()
  const [filterCandidate, setFilterCandidate] = useState([])
  const {total, ...candidates} = state
  let values = Object.values(candidates)
  let keys = Object.keys(candidates)

  function filterByType(e){
    
    if(e.target.value === 'percentage'){
      const percentaged = values.map(item => Math.floor((Number(item) / total) * 100 ) + '%')
      return setFilterType(percentaged.join(" "));
    } else{

      return setFilterType(Object.values(candidates))
    }
    }

    
    function filterByCandidate(e){

        if(e.target.checked){
          const result = keys.filter(item => item === e.target.id)
          return setFilterCandidate(result)
        } else {
          console.log("not checked")
        }

      } 

   


    

  return (
    <div>
        <p>Filter by Type</p>
          <input type="radio" name="filterByType" id="percentage" value="percentage" onChange={filterByType}/>
          <label htmlFor="percentage">Percentage</label>
          <input type="radio" name="filterByType" id="numerical" value="numerical" onChange={filterByType}/>
          <label htmlFor="numerical">Numerical</label>
        <p>Filter by Candidate</p>

        {
          keys.map(item => item ?
            <div key={item}>
              <input type="checkbox" name="filterByCandidate" id={item} onChange={filterByCandidate}/>
              <label htmlFor={item}>{item}</label>
            </div> : null
            )
        }
    <div>
      {filterType}
      {filterCandidate}
      
      </div>
    </div>
  )
}

export default Filter;
