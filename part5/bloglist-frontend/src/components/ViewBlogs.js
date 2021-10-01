import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ViewBlogs = ({ userId }) => {
  const blogs = useSelector((state) =>
    state.blogs.filter((blog) => blog.user.id === userId.params.id)
  );

  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/viewBlog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
