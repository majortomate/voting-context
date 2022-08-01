import './App.css';
import Candidate1 from './components/Candidates/Candidate1';
import Candidate2 from './components/Candidates/Candidate2';
import Candidate3 from './components/Candidates/Candidate3';
import Candidate4 from './components/Candidates/Candidate4';
import Filter from './components/Filter/Filter';
import IndividualVotes from './components/IndividualVotes/IndividualVotes';
import TotalVotes from './components/TotalVotes/TotalVotes';
import { DataProvider } from './context/DataContext';


function App() {


  return (
    <DataProvider className="App">
      <div className="candidates">
        <Candidate1 />
        <Candidate2 />
        <Candidate3 />
        <Candidate4 />
      </div>
      <div className="total-votes">
        <TotalVotes />
      </div>
      <div className="filter">
        <Filter />
      </div>
    </DataProvider>
  );
}

export default App;
