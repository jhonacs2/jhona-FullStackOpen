import blogService from '../services/blogs';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOG':
      return action.data;
    case 'ADD_BLOG':
      return state.concat(action.data);
    case 'UPDATE_LIKE':
      return state.map((blog) =>
        blog.id !== action.data.newBlog.id ? blog : action.data.newBlog
      );
    case 'DELETE_POST':
      return state.filter((blog) => blog.id !== action.data.id);
    case 'ADD_COMMENT':
      return state.map((blog) =>
        blog.id === action.addingComment.id ? action.addingComment : blog
      );
    default:
      return state;
  }
};

export const initBlogs = () => {
  return async (dispatch) => {
    const initingBlog = await blogService.getAll();
    dispatch({
      type: 'INIT_BLOG',
      data: initingBlog,
    });
  };
};

export const addNewBlog = (newBlog) => {
  return async (dispatch) => {
    const addingBlog = await blogService.createBlog(newBlog);
    dispatch({
      type: 'ADD_BLOG',
      data: addingBlog,
    });
  };
};

export const updateLikeBlog = (id, newLike) => {
  return async (dispatch) => {
    const updatingLike = await blogService.likeBlog(id, { likes: newLike });
    dispatch({
      type: 'UPDATE_LIKE',
      data: updatingLike,
    });
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const deletingPost = await blogService.deleteBlog(id);
    dispatch({
      type: 'DELETE_POST',
      data: deletingPost,
    });
  };
};

export const addComment = (id, comment) => {
  return async (dispatch) => {
    const addingComment = await blogService.commentBlog(id, comment);
    dispatch({
      type: 'ADD_COMMENT',
      addingComment,
    });
  };
};

export default blogReducer;
