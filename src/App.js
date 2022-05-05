import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='top'> 
          <form>
            <label>
            Title
              <input />
            </label>
            <label>
            Year Released
              <input />
            </label>
            <label>
            Director
              <input />
            </label>
            <label>
            Poster Color
              <input />
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
