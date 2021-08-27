import React, { useState } from "react";

export const Blog = ({ blog, updateLike, userDeleteBlog }) => {
  const [details, setDetails] = useState(false);

  const showWhenVisible = { display: details ? "" : "none" };

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
    maxWidth: "500px",
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  return (
    <div style={blogStyle}>
      <div>
        <h2 style={{ display: "inline-block", padding: "15px" }}>
          {blog.title}
          <span> by {blog.author}</span>{" "}
        </h2>
        <button type="submit" onClick={toggleVisibility}>
          Show Details{" "}
        </button>
      </div>
      <div style={showWhenVisible}>
        <p>Link: {blog.url}</p>
        <p>Likes: {blog.likes}</p>
        <button onClick={newLike}>Like </button>
        <button onClick={deleteBlog}>Delete </button>
      </div>
    </div>
  );
};
