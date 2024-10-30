import React from 'react';
import { Heart, MessageCircle, Bookmark, Share2, Menu, Search, Home, PlusSquare, Film, User } from 'lucide-react';
import Stories from './components/Stories';
import Posts from './components/Posts';
import Suggestions from './components/Suggestions';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Instagram</div>
            <div className="hidden md:flex items-center flex-1 max-w-xs mx-4">
              <div className="w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Home className="h-6 w-6" />
              <MessageCircle className="h-6 w-6" />
              <PlusSquare className="h-6 w-6" />
              <Film className="h-6 w-6" />
              <Heart className="h-6 w-6" />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Profile"
                className="h-7 w-7 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Stories />
              <Posts />
            </div>
            <div className="hidden lg:block">
              <Suggestions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;