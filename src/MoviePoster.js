import React from 'react';

export default function MoviePoster({ title, year, director, posterColor }) {
  return (
    <div className='movie-poster' style={{ background: posterColor }}>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{director}</p>
    </div>
  );
}
