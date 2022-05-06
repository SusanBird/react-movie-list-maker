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
  const [filteredMovies, setFilteredMovies] = useState([]);


  function deleteMovieByTitle(title) {

    const indexToRemove = movies.findIndex(movie => movie.title === title);
  
    movies.splice(indexToRemove, 1);

    setMovies([...movies]);
  }

  function filterMoviesByTitle(userInput) {
    if (userInput) {
      const matchingMovies = movies
        .filter(movie => movie.title.toLowerCase()
          .includes(userInput.toLowerCase()
          )
        );
      setFilteredMovies([...matchingMovies]);
    } else {
      setFilteredMovies([...movies]);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className='top'> 
          <MovieForm
            title={title}
            setTitle={setTitle}
            year={year}
            setYear={setYear}
            director={director}
            setDirector={setDirector}
            posterColor={posterColor}
            setPosterColor={setPosterColor}
            setMovies={setMovies}
            movies={movies}
          />
          {
            title || year || director
              ? <MoviePoster title={title} year={year} director={director} posterColor={posterColor} />
              : <div>Type to show a preview.</div>
          }
        </div>

        <div className='bottom'>
          <div>
            Filtered Movies by Title
            <input onChange={e => filterMoviesByTitle(e.target.value)} />
          </div>
        
          <MovieList movies={filteredMovies.length ? filteredMovies : movies} deleteMovieByTitle={deleteMovieByTitle} />
        </div>
      </header>
    </div>
  );
}

export default App;
