import React, { useState, useEffect, useRef } from 'react';
import { Blog } from './components/Blog';
import { LoginForm } from './components/LoginForm';
import loginService from './services/login';
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

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);
  // const [blogs, setBlogs] = useState([]);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [notificationMsg, setNotificationMsg] = useState(null);

  const createFormRef = useRef();
  useEffect(() => {
    function inittheBlogs() {
      dispatch(initBlogs());
    }
    inittheBlogs();
  }, [dispatch]);
  // const highToLower = blogs.sort((a, b) => {
  //   return b.likes - a.likes;
  // });

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
      dispatch(setUserLogin(user));
    }
  }, [dispatch]);
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      dispatch(setUserLogin(user));
      setUserName('');
      setPassword('');
      setNotificationMsg('Welcome');
    } catch (error) {
      setNotificationMsg('username or password incorrect');
    }
    setTimeout(() => {
      setNotificationMsg(null);
    }, 5000);
  };

  const addBlog = (newBlog) => {
    createFormRef.current.toggleVisibility();
    dispatch(addNewBlog(newBlog));
    // blogService.createBlog(newBlog).then((returnedBlog) => {
    //   setBlogs(blogs.concat(returnedBlog));
    //   setNotificationMsg(`The Blog ${returnedBlog.title} has been added `);

    //   setTimeout(() => {
    //     setNotificationMsg(null);
    //   }, 5000);
    // });
  };

  const updateLike = (id, newLike) => {
    dispatch(updateLikeBlog(id, newLike));
    // blogService.likeBlog(id, { likes: newLike }).then((blogReturned) => {
    //   setBlogs(
    //     blogs.map((blog) => (blog.id !== id ? blog : blogReturned.newBlog))
    //   );
    // });
  };

  const userDeleteBlog = (id) => {
    dispatch(deletePost(id));
    // blogService.deleteBlog(id).then((returnedBlog) => {
    //   console.log(returnedBlog);
    //   setBlogs(blogs.filter((blog) => blog.id !== id));
    // });
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={notificationMsg} />
        <Toggable buttonLabel='Login'>
          <LoginForm
            username={username}
            password={password}
            setUserName={setUserName}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        </Toggable>
      </div>
    );
  }

  return (
    <div>
      {user && <h1>Welcome {user.name}</h1>}
      <Notification message={notificationMsg} />
      <Toggable buttonLabel='Create new blog' ref={createFormRef}>
        <CreateForm addBlog={addBlog} />
      </Toggable>
      <h2>Blogs</h2>
      create
      {blogs.map((blog) => (
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
