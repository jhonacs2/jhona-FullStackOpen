import React, { useState } from 'react'
const initialState = {
  title: '',
  author: '',
  url: '',
}

export const CreateForm = ({ addBlog }) => {
  const [blogForm, setBlogForm] = useState(initialState)
  const handleInputChange = (e) => {
    setBlogForm({
      ...blogForm,
      [e.target.name]: e.target.value,
    })
  }

  const newBlog = (e) => {
    e.preventDefault()
    addBlog({
      title: blogForm.title,
      author: blogForm.author,
      url: blogForm.url,
    })
    setBlogForm(initialState)
  }

  return (
    <div>
      {' '}
      <form className="row" onSubmit={newBlog}>
        <div className="col-md-3">
          <input
            type="text"
            value={blogForm.title}
            placeholder="Title"
            className="form-control"
            onChange={handleInputChange}
            name="title"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            value={blogForm.author}
            placeholder="Author"
            className="form-control"
            onChange={handleInputChange}
            name="author"
          ></input>
        </div>
        <div className="col-md-3">
          <input
            type="text"
            value={blogForm.url}
            placeholder="Url"
            className="form-control"
            onChange={handleInputChange}
            name="url"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  )
}
