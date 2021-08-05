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
