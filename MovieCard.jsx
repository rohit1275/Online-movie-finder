import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar } from 'lucide-react';

const MovieCard = ({ movie, onSelectMovie }) => {
  const posterPath = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <motion.div
      className="movie-card group cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelectMovie(movie)}
    >
      <div className="movie-card-inner glass-card rounded-xl overflow-hidden h-full flex flex-col">
        <div className="relative">
          <img
            className="w-full h-96 object-cover"
            alt={`${movie.Title} movie poster`}
            src={posterPath}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white text-lg font-bold border-2 border-white rounded-full px-4 py-2 bg-black/50">
                View Details
             </span>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2 line-clamp-1">{movie.Title}</h3>
          <div className="flex items-center justify-between mt-auto text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 rating-star" />
              <span className="capitalize">{movie.Type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{movie.Year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;