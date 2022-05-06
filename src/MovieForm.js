import React from 'react';

export default function MovieForm({ 
  title, setTitle,
  year, setYear,
  posterColor, setPosterColor,  
  movies, setMovies 
}) {

  function handleSubmit(e) {
    e.preventDefault();
    
    const newMovie = {
      title,
      year,
      posterColor
    };

    setMovies([...movies, newMovie]);

    setTitle('');
    setYear('');
    setDirector('');
    setPosterColor('magenta');
  }

  return (
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
    
  );
}
