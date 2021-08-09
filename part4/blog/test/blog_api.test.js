const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Blog = require("../models/blog");

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
  const newNote = {
    title: "Nueva Nota",
    author: "Jhonatan2",
    url: "efe.com",
    likes: 100,
  };
  const response = await api.get("/api/blogs");
  await api.post("/api/blogs").send(newNote).expect(201);
  const afterAddPost = await api.get("/api/blogs");

  expect(afterAddPost.body).toHaveLength(response.body.length + 1);
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
