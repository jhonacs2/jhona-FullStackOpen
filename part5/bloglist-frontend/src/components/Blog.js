import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const Blog = ({ blog, updateLike, userDeleteBlog }) => {
  const [details, setDetails] = useState(false);

  const showWhenVisible = { display: details ? '' : 'none' };

  const newLike = (e) => {
    e.preventDefault();
    const numberLikes = blog.likes + 1;
    updateLike(blog.id, numberLikes);
  };

  const deleteBlog = () => {
    userDeleteBlog(blog.id);
  };

  const toggleVisibility = () => {
    setDetails(!details);
  };

  const blogStyle = {
    maxWidth: '500px',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div className='ClassBlog' style={blogStyle}>
      <div>
        <h2 style={{ display: 'inline-block', padding: '15px' }}>
          {blog.title}
          <span> by {blog.author}</span>{' '}
        </h2>
        <button type='submit' onClick={toggleVisibility}>
          Show Details{' '}
        </button>
      </div>
      <div className='Links' style={showWhenVisible}>
        <p>Link: {blog.url}</p>
        <p>
          Likes: <span>{blog.likes}</span>
        </p>
        <button onClick={newLike} id='buttonLike'>
          Like{' '}
        </button>
        <button onClick={deleteBlog}>Delete </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  updateLike: PropTypes.func.isRequired,
  userDeleteBlog: PropTypes.func.isRequired,
};
