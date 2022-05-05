import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [posterColor, setPosterColor] = useState('');


  return (
    <div className="App">
      <header className="App-header">
        <div className='top'> 
          <form>
            <label>
            Title
              <input onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>
            Year Released
              <input onChange={e => setYear(e.target.value)}/>
            </label>
            <label>
            Director
              <input onChange={e => setDirector(e.target.value)}/>
            </label>
            <label>
            Poster Color
              <select onChange={e => setPosterColor(e.target.value)}> 
                <option>blue</option>
                <option>purple</option>
                <option>green</option>
                <option>pink</option>
              </select>
            </label>
            <button>Add Movie</button>
          </form>
        </div>
        {/* <MoviePoster /> */}
        <div className='bottom'>
        
          {/* <MovieList /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
