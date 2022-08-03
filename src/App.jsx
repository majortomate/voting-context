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
    <DataProvider>
      <div className="App">
        <h1>Voting App</h1>
        <p>Built with React and useContext for practicing purposes.</p>
        <div className="vote-btns">
          <Candidate1 />
          <Candidate2 />
          <Candidate3 />
          <Candidate4 />
        </div>
        <div className='content'>
          <aside className="filter">
            <Filter />
          </aside>
          <main>
            <div className="total-votes">
              <TotalVotes />
            </div>
            <div className='individual-votes'>
              <IndividualVotes />
            </div>
          </main>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
