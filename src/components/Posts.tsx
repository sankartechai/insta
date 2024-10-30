import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from 'lucide-react';

const posts = [
  {
    id: 1,
    username: 'jane_doe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=800&fit=crop',
    caption: 'Beautiful sunset at the beach 🌅 #nature #photography',
    likes: 1234,
    comments: 56,
    timeAgo: '2 hours ago',
  },
  {
    id: 2,
    username: 'travel_enthusiast',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    image: 'https://images.unsplash.com/photo-1682687221080-5cb261c645cb?w=1200&h=800&fit=crop',
    caption: 'Adventure awaits! 🏔️ #travel #wanderlust',
    likes: 892,
    comments: 34,
    timeAgo: '5 hours ago',
  },
];

function Posts() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleSave = (postId: number) => {
    setSavedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6">
      {posts.map(post => (
        <article key={post.id} className="bg-white border border-gray-200 rounded-lg">
          {/* Post Header */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <img
                src={post.avatar}
                alt={post.username}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">{post.username}</span>
            </div>
            <button>
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Post Image */}
          <img
            src={post.image}
            alt="Post content"
            className="w-full object-cover"
          />

          {/* Post Actions */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <button onClick={() => toggleLike(post.id)}>
                  <Heart
                    className={`h-6 w-6 ${
                      likedPosts.includes(post.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-700'
                    }`}
                  />
                </button>
                <button>
                  <MessageCircle className="h-6 w-6 text-gray-700" />
                </button>
                <button>
                  <Share2 className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              <button onClick={() => toggleSave(post.id)}>
                <Bookmark
                  className={`h-6 w-6 ${
                    savedPosts.includes(post.id)
                      ? 'fill-black text-black'
                      : 'text-gray-700'
                  }`}
                />
              </button>
            </div>

            {/* Likes */}
            <div className="font-medium mb-2">
              {post.likes.toLocaleString()} likes
            </div>

            {/* Caption */}
            <div className="mb-2">
              <span className="font-medium mr-2">{post.username}</span>
              {post.caption}
            </div>

            {/* Comments */}
            <button className="text-gray-500 text-sm mb-2">
              View all {post.comments} comments
            </button>

            {/* Timestamp */}
            <div className="text-gray-500 text-xs uppercase">
              {post.timeAgo}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Posts;