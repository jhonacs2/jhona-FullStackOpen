import React, { useEffect, useRef } from 'react';
import { Blog } from './components/Blog';
import { LoginForm } from './components/LoginForm';
import blogService from './services/blogs';
import { CreateForm } from './components/CreateForm';
import { Notification } from './components/Notification';
import { Toggable } from './components/Toggable';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from './reducers/userReducer';
import {
  addNewBlog,
  deletePost,
  initBlogs,
  updateLikeBlog,
} from './reducers/blogReducer';
import { setNotification } from './reducers/notificationReducer';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  const createFormRef = useRef();
  useEffect(() => {
    function inittheBlogs() {
      dispatch(initBlogs());
    }
    inittheBlogs();
  }, [dispatch]);

  const highToLower = blogs.sort((a, b) => {
    return b.likes - a.likes;
  });

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
      dispatch(setUserLogin(user));
    }
  }, [dispatch]);

  const addBlog = (newBlog) => {
    createFormRef.current.toggleVisibility();
    dispatch(addNewBlog(newBlog));
    console.log(newBlog);
    dispatch(setNotification(`The Blog ${newBlog.title} has been added `, 5));
  };

  const updateLike = (id, newLike) => {
    dispatch(updateLikeBlog(id, newLike));
  };

  const userDeleteBlog = (id) => {
    dispatch(deletePost(id));
    dispatch(setNotification(`The Blog has been deleted `, 5));
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification />
        <Toggable buttonLabel='Login'>
          <LoginForm />
        </Toggable>
      </div>
    );
  }

  return (
    <div>
      {user && <h1>Welcome {user.name}</h1>}
      <Notification />
      <Toggable buttonLabel='Create new blog' ref={createFormRef}>
        <CreateForm addBlog={addBlog} />
      </Toggable>
      <h2>Blogs</h2>
      create
      {highToLower.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          updateLike={updateLike}
          userDeleteBlog={userDeleteBlog}
        />
      ))}
    </div>
  );
};

export default App;
