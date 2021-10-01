const blogRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
  response.json(blogs);
});

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id);
  if (blog) {
    response.status(200).json(blog);
  } else {
    response.status(404).end();
  }
});
//add blog to the mongoBD
blogRouter.post('/', async (request, response) => {
  const body = request.body;
  // const token = getTokenFrom(request)

  const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' });
  }

  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id,
  });

  const savedBlog = await blog.save();
  console.log(savedBlog);
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();
  response.status(200).json(savedBlog);
});

blogRouter.put('/:id', async (request, response) => {
  const { likes } = request.body;

  const updateBlog = {
    likes,
  };

  const newBlog = await Blog.findByIdAndUpdate(request.params.id, updateBlog, {
    new: true,
  }).populate('user', { username: 1, name: 1 });
  if (newBlog) {
    response.status(200).json({ newBlog });
  } else {
    response.status(404).end();
  }
});

blogRouter.delete('/:id', async (request, response) => {
  const id = request.params.id;
  const decodedToken = jwt.verify(request.token, process.env.SECRET);
  const blog = await Blog.findById(id);
  console.log(decodedToken.id === blog.user.toString());
  if (decodedToken.id === blog.user.toString()) {
    await Blog.findByIdAndRemove(id);
    response.status(201).json(blog);
  } else {
    response.status(401).end();
  }
});

module.exports = blogRouter;
