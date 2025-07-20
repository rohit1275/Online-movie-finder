
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-lg border-t border-white/10 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="hero-title text-2xl font-bold">CineSphere</span>
            <p className="text-gray-400 mt-4">
              Your ultimate destination for discovering and downloading the latest movies.
            </p>
          </div>
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Trending</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Top Rated</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Latest</p>
            </div>
          </div>
          <div>
            <span className="text-lg font-semibold mb-4 block">Info</span>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">About Us</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Contact</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
            </div>
          </div>
          <div>
            <span className="text-lg font-semibold mb-4 block">Legal</span>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Terms of Service</p>
               <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">
                  This site uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CineSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
