import './App.css';
import { useState } from 'react';
import MoviePoster from './MoviePoster';

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
                <option value="navy">Blue</option>
                <option value="purple">Purple</option>
                <option value="olive">Green</option>
                <option value="pink">Pink</option>
              </select>
            </label>
            <button>Add Movie</button>
          </form>
        </div>
        <div className='movie-poster' style={{ background: posterColor }}>
          <MoviePoster title={title} year={year} director={director} posterColor={posterColor} />
        </div>
        
        <div className='bottom'>
        
          {/* <MovieList /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
