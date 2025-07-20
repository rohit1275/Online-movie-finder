import React from 'react';
import MovieCard from './MovieCard';

export default function MovieSection({ title, movies, onSelectMovie }) {
  if (!movies || movies.length === 0) return null;
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-white pl-2">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 px-2">
        {movies.map(movie => (
          <div key={movie.imdbID} className="min-w-[200px] max-w-[220px] flex-shrink-0">
            <MovieCard movie={movie} onSelectMovie={onSelectMovie} />
          </div>
        ))}
      </div>
    </section>
  );
} 