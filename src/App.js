import './App.css';
import { useState } from 'react';
import MoviePoster from './MoviePoster';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

function App() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [posterColor, setPosterColor] = useState('magenta');
  const [movies, setMovies] = useState([{ title: 'Hook', year: 2018, director: 'Peter Pan', posterColor: 'pink' }]);

  function deleteMovieByTitle(title) {

    const indexToRemove = movies.findIndex(movie => movie.title === title);
  
    movies.splice(indexToRemove, 1);

    setMovies([...movies]);
  }


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
        
          <MovieList movies={movies} deleteMovieByTitle={deleteMovieByTitle} />
        </div>
      </header>
    </div>
  );
}

export default App;
