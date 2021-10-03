import React from 'react';
import { useSelector } from 'react-redux';
import { useField } from '../hooks/useField';
import { Comments } from './Comments';

export const ViewBlog = ({
  blogId,
  updateLike,
  userDeleteBlog,
  addCommentBlog,
}) => {
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId.params.id)
  );
  const user = useSelector((state) => state.user);
  const comment = useField('text');

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
      <div>
        <input
          type={comment.type}
          value={comment.value}
          name='comment'
          onChange={comment.onChangue}
        ></input>
        <button
          onClick={() => addCommentBlog(blog.id, { comment: comment.value })}
        >
          Add Comment
        </button>
      </div>
      <Comments comments={blog.comments} />
    </div>
  );
};
