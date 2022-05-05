import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <MoviePoster />

        <MovieList />
      </header>
    </div>
  );
}

export default App;
