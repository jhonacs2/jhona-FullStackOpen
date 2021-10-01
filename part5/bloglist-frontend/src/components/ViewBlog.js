import React from 'react';
import { useSelector } from 'react-redux';

export const ViewBlog = ({ blogId }) => {
  console.log(blogId.params.id);
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId.params.id)
  );

  return (
    <div>
      <h2>{blog.title}</h2>
    </div>
  );
};
