import React from 'react';
import { motion } from 'framer-motion';
import MovieCard from '@/components/MovieCard';
import { Skeleton } from '@/components/ui/skeleton';

const MovieList = ({ movies, loading, onSelectMovie, title }) => {
  return (
    <section className="relative z-10 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          className="text-3xl font-bold mb-8 text-center capitalize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h3>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[384px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {movies.map(movie => (
              <motion.div
                key={movie.imdbID}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <MovieCard movie={movie} onSelectMovie={onSelectMovie} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && movies.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">No Movies Found</h3>
            <p className="text-gray-400">Try a different search term.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MovieList;