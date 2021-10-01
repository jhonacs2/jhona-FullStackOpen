import React from 'react';
import { useSelector } from 'react-redux';


export const ViewBlog = ({ blogId, updateLike, userDeleteBlog }) => {



  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId.params.id)
  );
  const user = useSelector((state) => state.user);

  if (blog === undefined) {
    return null;
  }

  const likeBlog = () => {
    updateLike(blog.id, blog.likes + 1);
  };

  return (
    <div>
      <h2>{blog.title}</h2>

      <a href={blog.url}>{blog.url}</a>
      <p>
        likes {blog.likes} <button onClick={likeBlog}>like</button>
      </p>
      <p>added by {blog.user.username}</p>
      {user.username === blog.user.username ? (
        <button onClick={() => userDeleteBlog(blog.id)}>Delete</button>
      ) : null}
    </div>
  );
};
