import './App.css';
import { useState } from 'react';
import MoviePoster from './MoviePoster';

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [posterColor, setPosterColor] = useState('magenta');

  function handleSubmit(e) {
    e.preventDefault();

    alert(`${title} ${year} ${director} ${posterColor}`);

    setTitle('');
    setYear('');
    setDirector('');
    setPosterColor('magenta');
  }

  console.log(title, year, director, posterColor);

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
          {
            title || year
              ? <MoviePoster title={title} year={year} director={director} posterColor={posterColor} />
              : <div>Type to show a preview.</div>
          }
        </div>

        
        <div className='bottom'>
        
          {/* <MovieList /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
