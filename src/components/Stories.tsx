import React from 'react';
import { Plus } from 'lucide-react';

const stories = [
  {
    id: 1,
    username: 'Your Story',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    isUser: true,
  },
  {
    id: 2,
    username: 'jane_doe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    username: 'john_smith',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    username: 'sarah_wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

function Stories() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`relative rounded-full p-[2px] ${story.isUser ? 'bg-white' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
              <div className="relative w-16 h-16">
                <img
                  src={story.avatar}
                  alt={story.username}
                  className="rounded-full w-full h-full object-cover border-2 border-white"
                />
                {story.isUser && (
                  <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1 border-2 border-white">
                    <Plus className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
            <span className="text-xs font-medium truncate w-16 text-center">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;