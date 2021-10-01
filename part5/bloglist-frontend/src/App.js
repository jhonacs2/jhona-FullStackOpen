import React, { useEffect } from 'react';
import { LoginForm } from './components/LoginForm';
import blogService from './services/blogs';
import { CreateForm } from './components/CreateForm';
import { Notification } from './components/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from './reducers/userReducer';
import {
  addNewBlog,
  deletePost,
  initBlogs,
  updateLikeBlog,
} from './reducers/blogReducer';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { setNotification } from './reducers/notificationReducer';
import Home from './components/Home';
import { ViewBlogs } from './components/ViewBlogs';
import { ViewBlog } from './components/ViewBlog';
import { useHistory } from 'react-router';
const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);

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

  const addBlog = (newBlog) => {
    dispatch(addNewBlog(newBlog));
    dispatch(setNotification(`The Blog ${newBlog.title} has been added `, 5));
  };

  const updateLike = (id, newLike) => {
    dispatch(updateLikeBlog(id, newLike));
  };

  const userDeleteBlog = (id) => {
    dispatch(deletePost(id));
    history.push('/');
    dispatch(setNotification(`The Blog has been deleted `, 5));
  };
  const matchUserId = useRouteMatch('/blogs/:id');
  const matchBlogId = useRouteMatch('/viewBlog/:id');
  return (
    <div>
      <div>
        {/* render header links if user is not null */}
        {user && (
          <>
            <Link to='/'>Home</Link>
            <Link to='/createBlog'> Create blog</Link>
            {user && (
              <button
                onClick={(e) => {
                  localStorage.removeItem('loggedBlogAppUser');
                  window.location.reload();
                }}
              >
                LogOut
              </button>
            )}
          </>
        )}

        <Switch>
          <Route path='/blogs/:id'>
            <ViewBlogs userId={matchUserId} />
          </Route>
          <Route path='/viewBlog/:id'>
            <ViewBlog
              blogId={matchBlogId}
              updateLike={updateLike}
              userDeleteBlog={userDeleteBlog}
            />
          </Route>
          <Route path='/createBlog'>
            <CreateForm addBlog={addBlog} />
          </Route>
          <Route path='/'>{user ? <Home /> : <LoginForm />}</Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
