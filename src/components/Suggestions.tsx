import React from 'react';

const suggestions = [
  {
    id: 1,
    username: 'photography_pro',
    avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop',
    subtitle: 'Followed by user123 + 2 more',
  },
  {
    id: 2,
    username: 'travel_guides',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    subtitle: 'Followed by jane_doe + 8 more',
  },
  {
    id: 3,
    username: 'food_lover',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    subtitle: 'New to Instagram',
  },
];

function Suggestions() {
  return (
    <div className="fixed w-[320px]">
      {/* User Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Your profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="font-medium">your_username</div>
            <div className="text-gray-500 text-sm">Your Name</div>
          </div>
        </div>
        <button className="text-blue-500 text-sm font-medium">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-medium">Suggestions For You</span>
        <button className="text-sm font-medium">See All</button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3">
        {suggestions.map(suggestion => (
          <div key={suggestion.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={suggestion.avatar}
                alt={suggestion.username}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <div className="font-medium text-sm">{suggestion.username}</div>
                <div className="text-gray-500 text-xs">{suggestion.subtitle}</div>
              </div>
            </div>
            <button className="text-blue-500 text-xs font-medium">Follow</button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="mt-8 text-xs text-gray-400">
        <div className="space-x-1">
          <a href="#" className="hover:underline">About</a> ·
          <a href="#" className="hover:underline">Help</a> ·
          <a href="#" className="hover:underline">Press</a> ·
          <a href="#" className="hover:underline">API</a> ·
          <a href="#" className="hover:underline">Jobs</a> ·
          <a href="#" className="hover:underline">Privacy</a> ·
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <div className="mt-4">© 2024 Instagram Clone</div>
      </div>
    </div>
  );
}

export default Suggestions;