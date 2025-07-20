import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const SuggestionPopup = ({ movie, onClose, onDetails }) => {
  const posterPath = movie?.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=New+Movie";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-4 modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card rounded-2xl p-6 max-w-sm w-full"
        initial={{ scale: 0.8, opacity: 0, x: 100 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        exit={{ scale: 0.8, opacity: 0, x: 100 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
            <img  
              className="w-24 h-36 object-cover rounded-lg"
              alt={`${movie.Title} poster`}
              src={posterPath}
             />
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2 gradient-text">🎬 Movie Suggestion!</h3>
            <p className="font-semibold text-white mb-2 line-clamp-1">{movie.Title}</p>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">
              Check out this movie. Want to see more details?
            </p>
            <div className="flex gap-2">
              <Button className="flex-1 download-btn text-xs" onClick={onDetails}>
                Get Details
              </Button>
              <Button variant="outline" className="flex-1 text-xs" onClick={onClose}>
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SuggestionPopup;