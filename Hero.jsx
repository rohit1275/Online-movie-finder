import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = ({ searchQuery, setSearchQuery, handleSearch, loading }) => {
  return (
    <section className="relative z-10 px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Find Your Next
          <span className="gradient-text block">Favorite Movie</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Search our vast database of movies powered by OMDb.
        </motion.p>

        <motion.div 
          className="relative max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchQuery); }} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search for movies by title..."
              className="w-full pl-12 pr-28 py-4 bg-black/30 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 search-glow transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 download-btn"
              disabled={loading}
            >
              {loading ? (
                <div className="loading-spinner w-5 h-5" />
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2 md:hidden" />
                  <span className="hidden md:inline">Search</span>
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;