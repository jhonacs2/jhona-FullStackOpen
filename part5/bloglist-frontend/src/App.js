import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import { LoginForm } from "./components/LoginForm";
import loginService from "./services/login";
import blogService from "./services/blogs";
import { CreateForm } from "./components/CreateForm";
import { Notification } from "./components/Notification";
const initialState = {
  title: "",
  author: "",
  url: "",
};

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const [user, setUser] = useState(null);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [blogForm, setBlogForm] = useState(initialState);
  const [notificationMsg, setNotificationMsg] = useState(null);

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

  const handleInputChange = (e) => {
    setBlogForm({
      ...blogForm,
      [e.target.name]: e.target.value,
    });
  };

  const addBlog = (e) => {
    e.preventDefault();
    const newBlog = {
      title: blogForm.title,
      author: blogForm.author,
      url: blogForm.url,
    };
    blogService.createBlog(newBlog).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog));
      setNotificationMsg(`The Blog ${returnedBlog.title} has been added `);
      setBlogForm(initialState);
      setTimeout(() => {
        setNotificationMsg(null);
      }, 5000);
    });
  };

  if (user === null) {
    return (
      <div>
        <h2>Log in to application</h2>
        <Notification message={notificationMsg} />
        <LoginForm
          username={username}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      </div>
    );
  }

  return (
    <div>
      {user && <h1>Welcome {user.name}</h1>}
      <Notification message={notificationMsg} />
      <CreateForm
        handleInputChange={handleInputChange}
        addBlog={addBlog}
        blogForm={blogForm}
      />
      <h2>Blogs</h2>
      create
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default App;
