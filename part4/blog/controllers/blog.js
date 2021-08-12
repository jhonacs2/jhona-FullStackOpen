const blogRouter = require("express").Router();
const Blog = require("../models/blog");

blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogRouter.get("/:id",async(request,response) => {
  const blog = await Blog.findById(request.params.id)
  if(blog){
    response.status(200).json(blog)
  }else{
    response.status(404).end()
  }
})
//add blog to the mongoBD
blogRouter.post("/", async (request, response) => {
  const body = request.body;
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
  });

  const savedBlog = await blog.save();
  response.status(200).json(savedBlog);
});

blogRouter.put("/:id", async(request, response) => {
  const {likes} = request.body

  const updateBlog = {
    likes
  }

  const newBlog = await Blog.findByIdAndUpdate(request.params.id,updateBlog, { new: true })
  if(newBlog){
    response.status(200).json({newBlog})
  }else{
    response.status(404).end()
  }
  
})

module.exports = blogRouter;
