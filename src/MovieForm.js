import React from 'react';

export default function MovieForm({ 
  title, setTitle,
  year, setYear,
  director, setDirector,
  posterColor, setPosterColor,  
  movies, setMovies 
}) {

  function handleSubmit(e) {
    e.preventDefault();
    
    const newMovie = {
      title,
      year,
      director,
      posterColor
    };

    setMovies([...movies, newMovie]);

    setTitle('');
    setYear('');
    setDirector('');
    setPosterColor('magenta');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
            Title
        <input value={title} onChange={e => setTitle(e.target.value)}/>
      </label>
      <label>
            Year Released
        <input value={year} onChange={e => setYear(e.target.value)}/>
      </label>
      <label>
            Director
        <input value={director} onChange={e => setDirector(e.target.value)}/>
      </label>
      <label>
            Poster Color
        <select value={posterColor} onChange={e => setPosterColor(e.target.value)}> 
          <option value="navy">Blue</option>
          <option value="purple">Purple</option>
          <option value="olive">Green</option>
          <option value="pink">Pink</option>
        </select>
      </label>
      <button>Add Movie</button>
    </form>
    
  );
}
