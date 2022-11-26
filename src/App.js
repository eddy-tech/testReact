import './App.css';
import NavBar from './components/navbar';
import CollabList from './components/collab/CollabList'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'><CollabList /></div>
          <div className='col-md-8'>4</div>
        </div>
      </div>
    </div>
  );
}

export default App;
