import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function Filter() {

  const { dispatch } = useContext(DataContext)
  return (
    <div>
        <section>
          <p>Filter by Candidate</p>
          <div>
            <input type="checkbox" id="candidate1" onChange={()=> dispatch({type:"show_candidate1"})}/>
            <label htmlFor="candidate1">Candidate 1</label>
          </div>
          <div>
            <input type="checkbox" id="candidate2" onChange={()=> dispatch({type:"show_candidate2"})}/>
            <label htmlFor="candidate2">Candidate 2</label>
          </div>
          <div>
            <input type="checkbox" id="candidate3" onChange={()=> dispatch({type:"show_candidate3"})}/>
            <label htmlFor="candidate3">Candidate 3</label>
          </div>
          <div>
            <input type="checkbox" id="candidate4" onChange={()=> dispatch({type:"show_candidate4"})}/>
            <label htmlFor="candidate4">Candidate 4</label>
          </div>
        </section>
        <section>
          <p>Filter by Percentage</p>
          <input type="checkbox" id="percentage" onChange={()=> dispatch({type:"percentage"})}/>
            <label htmlFor="percentage">Percentage</label>
        </section>
    </div>
  )
}

export default Filter;

