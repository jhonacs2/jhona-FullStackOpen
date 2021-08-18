const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/user");

test("user invalid", async () => {
  const newUser = {
    username: "asdff",
    name: "Diego",
    password: "",
  };

   const result = await api 
    .post('/api/users')
    .send(newUser)
    .expect(400)

    expect(result.body.error).toContain("username or password is shorter than minimun allowed length (3)");
});

afterAll(() => {
    mongoose.connection.close();
  });
