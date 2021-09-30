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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { setNotification } from './reducers/notificationReducer';
import { Home } from './components/Home';
import { HolaMundo } from './components/HolaMundo';
import userIdServices from './services/user';

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const blogs = useSelector((state) => state.blogs);

  const createFormRef = useRef();
  useEffect(() => {
    function inittheBlogs() {
      userIdServices.getAllUsers().then((users) => console.log(users));
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

  // if (user === null) {
  //   return (
  //     <div>
  //       <h2>Log in to application</h2>
  //       <Notification />
  //       <Toggable buttonLabel='Login'>
  //         <LoginForm />
  //       </Toggable>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Router>
        <div>
          {/* <Link to='/'>Home</Link> */}
          {/* render header links if user is not null */}
          {user && (
            <>
              <Link to='/'>Home</Link>
              <Link to='/createBlog'> Create blog</Link>
            </>
          )}

          <Switch>
            <Route path='/createBlog'>
              <HolaMundo />
            </Route>
            <Route path='/'>{user ? <Home /> : <LoginForm />}</Route>
          </Switch>
        </div>
      </Router>
      {/* {user && <h1>Welcome {user.name}</h1>}
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
      ))} */}
    </div>
  );
};

export default App;
