import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, Calendar, Clock, Download, Film, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { getMovieDetailsById } from '@/api/omdb';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';

const MovieModal = ({ imdbId, onClose }) => {
  const { toast } = useToast();

  const { data: movie, isLoading, isError, error } = useQuery(
    ['movieDetails', imdbId],
    () => getMovieDetailsById(imdbId),
    {
      enabled: !!imdbId,
    }
  );

  if (isError) {
    toast({ title: "API Error", description: error.message, variant: "destructive" });
    onClose();
    return null;
  }

  if (isLoading) {
    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
                <Skeleton className="w-full md:w-1/3 h-96 rounded-xl" />
                <div className="md:w-2/3 space-y-4">
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                    <Skeleton className="h-20 w-full" />
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-32" />
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  if (!movie) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop">
        <div className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex items-center justify-center">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold">Movie not found</h2>
            <p>We couldn't find details for this movie.</p>
            <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Close</button>
          </div>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    toast({
      title: "Confirm Download",
      description: `Start download for "${movie.Title}"?`,
      action: <Button onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"})}>Confirm</Button>,
    });
  };

  const posterPath = movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/500x750?text=No+Poster';

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <Button size="icon" variant="ghost" className="bg-black/50 hover:bg-black/70 text-white" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img className="w-full rounded-xl shadow-2xl" alt={`${movie.Title} poster`} src={posterPath} />
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-2 gradient-text">{movie.Title}</h1>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-gray-300">
                <div className="flex items-center gap-2"><Star className="h-5 w-5 rating-star" /> <span className="font-semibold">{movie.imdbRating}/10</span></div>
                <div className="flex items-center gap-2"><Calendar className="h-5 w-5 text-blue-400" /> <span>{movie.Year}</span></div>
                <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-green-400" /> <span>{movie.Runtime}</span></div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.Genre.split(', ').map(genre => (
                  <span key={genre} className="genre-tag px-3 py-1 rounded-full text-sm">{genre}</span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">{movie.Plot}</p>
              
              <div className="space-y-3 text-sm mb-8">
                <div className="flex"><strong className="w-24 inline-flex items-center gap-2"><Users className="h-4 w-4 text-purple-400"/>Actors:</strong> <span className="flex-1">{movie.Actors}</span></div>
                <div className="flex"><strong className="w-24 inline-flex items-center gap-2"><Film className="h-4 w-4 text-purple-400"/>Director:</strong> <span className="flex-1">{movie.Director}</span></div>
              </div>

              {/* Screenshots Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-white">Screenshots</h3>
                <div className="flex gap-4 overflow-x-auto">
                  <img src={posterPath} alt="Movie Poster" className="rounded-lg shadow-md w-48 h-28 object-cover" />
                  <img src="https://via.placeholder.com/320x180?text=Screenshot+2" alt="Screenshot 2" className="rounded-lg shadow-md w-48 h-28 object-cover" />
                  <img src="https://via.placeholder.com/320x180?text=Screenshot+3" alt="Screenshot 3" className="rounded-lg shadow-md w-48 h-28 object-cover" />
                </div>
              </div>

              {/* Download Links Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-white">Download Links</h3>
                <div className="flex flex-col gap-2">
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-fit" download>Download 480p</a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-fit" download>Download 720p</a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-fit" download>Download 1080p</a>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="download-btn text-white font-semibold px-8" onClick={handleDownload}><Download className="mr-2 h-5 w-5" /> Download</Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieModal;