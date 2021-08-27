import React, { useState, useEffect, useRef } from "react";
import { Blog } from "./components/Blog";
import { LoginForm } from "./components/LoginForm";
import loginService from "./services/login";
import blogService from "./services/blogs";
import { CreateForm } from "./components/CreateForm";
import { Notification } from "./components/Notification";
import { Toggable } from "./components/Toggable";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const [user, setUser] = useState(null);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [notificationMsg, setNotificationMsg] = useState(null);

  const createFormRef = useRef();

  const highToLower = blogs.sort((a, b) => {
    return b.likes - a.likes;
  });
  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      blogService.setToken(user.token);
      setUser(user);
      // noteService.setToken(user.token);
    }
  }, []);
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUserName("");
      setPassword("");
      setNotificationMsg("Welcome");
    } catch (error) {
      setNotificationMsg("username or password incorrect");
    }
    setTimeout(() => {
      setNotificationMsg(null);
    }, 5000);
  };

  const addBlog = (newBlog) => {
    createFormRef.current.toggleVisibility();
    blogService.createBlog(newBlog).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog));
      setNotificationMsg(`The Blog ${returnedBlog.title} has been added `);

      setTimeout(() => {
        setNotificationMsg(null);
      }, 5000);
    });
  };

  const updateLike = (id, newLike) => {
    blogService.likeBlog(id, { likes: newLike }).then((blogReturned) => {
      setBlogs(blogs.map((blog) => (blog.id !== id ? blog : blogReturned)));
    });
  };

  const userDeleteBlog = (id) => {
    blogService
      .deleteBlog(id)
      .then(returnedBlog => {
        setBlogs(blogs.filter(blog => blog.id !== id ))
      });
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={notificationMsg} />
        <Toggable buttonLabel="Login">
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
      <Toggable buttonLabel="Create new blog" ref={createFormRef}>
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
