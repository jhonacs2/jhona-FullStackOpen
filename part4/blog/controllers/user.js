const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

userRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;
  console.log((username.length && password.length) < 3);
  if ((username.length && password.length) < 3) {
    return response
      .status(400)
      .json({
        error:
          "username or password is shorter than minimun allowed length (3)",
      });
  }
  const saltRounds = 10;
  const passwordHash =
    password === undefined ? false : await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });
  if (username && name && password) {
    const savedUser = await user.save();

    response.json(savedUser);
  } else {
    response
      .status(401)
      .json({ error: "please fill out the entire form" })
      .end();
  }
});

module.exports = userRouter;
