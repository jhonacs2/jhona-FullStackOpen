const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Blog = require("../models/blog");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("have a unique name id", async () => {
  const note = await api.get("/api/blogs");
  expect(note.body[0].id).toBeDefined();
});

test("add post bd", async () => {
  let headers = {
    'Authorization': `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvbnljaGFuIiwiaWQiOiI2MTFjNWFlY2I1Y2E0YzAzMDEwYzUwYzIiLCJpYXQiOjE2MjkzMzk1MDZ9.uQBDbD7sV6pY0YMVdbpowLgzGdncLKyWB4uP0LTnki4`
  }
  const newBlog = {
    title: "Nueva Nota",
    author: "Jhonatan2",
    url: "efe.com",
    likes: "100",
    user: "611ee9aa7606b50100d64980"
  };
  const response = await api.get("/api/blogs");
  await api.post("/api/blogs").send(newBlog).expect(200).set(headers);
  const afterAddPost = await api.get("/api/blogs");

  expect(afterAddPost.body).toHaveLength(response.body.length + 1);
});

test("add post bd without token", async () => {
  let headers = {
    'Authorization': `bearer `
  }
  const newBlog = {
    title: "Nueva Nota",
    author: "Jhonatan2",
    url: "efe.com",
    likes: "100",
    user: "611ee9aa7606b50100d64980"
  };
  
  await api.post("/api/blogs").send(newBlog).expect(401).set(headers);
  
});

test("add post with id 0", async () => {
  const newNote = {
    title: "Nueva Nota prueba",
    author: "diego",
    url: "efe.com",
  };

  await api.post("/api/blogs").send(newNote).expect(200);
  const response = await api.get("/api/blogs");
   const verifyBlog =  response.body.find((blog) => blog.title === "Nueva Nota prueba" && blog)
  //  const verify = verifyBlog.map(blog => blog.title === "Nueva Nota prueba" ? blog : null)
  expect(verifyBlog.likes).toBe(0)
});

test("add blog without title and url", async () => {
  const newNote = {
   author: "diego",
  };

  await api.post("/api/blogs").send(newNote).expect(400);
 
});
