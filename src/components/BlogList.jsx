import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, onClick }) => (
  <div>
    {posts.map(post => (
      <BlogPost key={post.id} post={post} onClick={onClick} />
    ))}
  </div>
);

export default BlogList;