import blogService from '../services/blogs';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_BLOG':
      console.log(action.data);
      return action.data;
    case 'ADD_BLOG':
      return [...state, action.data];
    case 'UPDATE_LIKE':
      return state;
    case 'DELETE_POST':
      return state;
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

export const addNewBlog = async (newBlog) => {
  const addingBlog = await blogService.createBlog(newBlog);
  return {
    type: 'INIT_BLOG',
    data: addingBlog,
  };
};

export const updateLikeBlog = async (id, newLike) => {
  const updatingLike = await blogService.likeBlog(id, { likes: newLike });
  return {
    type: 'UPDATE_LIKE',
    data: updatingLike,
  };
};

export const deletePost = async (id) => {
  const deletingPost = await blogService.deleteBlog(id);
  return {
    type: 'DELETE_POST',
    data: deletingPost,
  };
};

export default blogReducer;
