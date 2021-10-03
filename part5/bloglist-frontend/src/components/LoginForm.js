import React from 'react';
import { useField } from '../hooks/useField';
import loginService from '../services/login';
import blogService from '../services/blogs';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../reducers/userReducer';
import { setNotification } from '../reducers/notificationReducer';
import { Container, Form, Button } from 'react-bootstrap';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const username = useField('text');
  const password = useField('password');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value,
      });

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));
      blogService.setToken(user.token);
      dispatch(setUserLogin(user));
      dispatch(setNotification('Welcome', 5));
    } catch (error) {
      dispatch(setNotification('username or password incorrect', 5));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type={username.type}
            placeholder='Enter Username'
            value={username.value}
            onChange={username.onChangue}
            name='username'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={password.type}
            value={password.value}
            onChange={password.onChangue}
            placeholder='Password'
            name='password'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
