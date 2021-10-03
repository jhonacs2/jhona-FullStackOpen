import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
const initialState = {
  title: '',
  author: '',
  url: '',
};

export const CreateForm = ({ addBlog }) => {
  const [blogForm, setBlogForm] = useState(initialState);
  const handleInputChange = (e) => {
    setBlogForm({
      ...blogForm,
      [e.target.name]: e.target.value,
    });
  };

  const newBlog = (e) => {
    e.preventDefault();
    addBlog({
      title: blogForm.title,
      author: blogForm.author,
      url: blogForm.url,
    });
    setBlogForm(initialState);
  };

  return (
    <Container>
      <Form onSubmit={newBlog}>
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            value={blogForm.title}
            placeholder='Enter Title'
            name='title'
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Author</Form.Label>
          <Form.Control
            type='text'
            value={blogForm.author}
            placeholder='Enter Author'
            name='author'
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>URL</Form.Label>
          <Form.Control
            type='text'
            value={blogForm.url}
            placeholder='Enter URL'
            name='url'
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Create Blog
        </Button>
      </Form>
    </Container>
  );
};
