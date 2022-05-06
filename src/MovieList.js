import React from 'react';
import MoviePoster from './MoviePoster';

export default function MovieList({ movies }) {
  return (
    <div>
      {
        movies.map((movie, i) => <MoviePoster 
          key={`${movie.title}-${movie.year}-${movie.director}-${i}`} 
          title={movie.title} 
          year={movie.year} 
          director={movie.director}
          posterColor={movie.posterColor} 
        />)
      }
    </div>
  );
}
