import './App.css';
import { useState } from 'react';
import MoviePoster from './MoviePoster';
import MovieList from './MovieList';

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [posterColor, setPosterColor] = useState('magenta');
  const [movies, setMovies] = useState([{ title: 'Hook', year: 2018, director: 'Peter Pan', posterColor: 'pink' }]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='top'> 
          
          {
            title || year
              ? <MoviePoster title={title} year={year} director={director} posterColor={posterColor} />
              : <div>Type to show a preview.</div>
          }
        </div>

        
        <div className='bottom'>
        
          <MovieList movies={movies}/>
        </div>
      </header>
    </div>
  );
}

export default App;
