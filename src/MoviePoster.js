import React from 'react';

export default function MoviePoster({ title, year, director, posterColor, deleteMovieByTitle }) {
  return (
    <div 
      onClick={() => deleteMovieByTitle(title)}
      className='movie-poster' style={{ background: posterColor }}>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{director}</p>
    </div>
  );
}
