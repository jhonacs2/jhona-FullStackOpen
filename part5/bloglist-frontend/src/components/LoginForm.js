import React from 'react';
import { useField } from '../hooks/useField';
import loginService from '../services/login';
import blogService from '../services/blogs';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../reducers/userReducer';
import { setNotification } from '../reducers/notificationReducer';

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
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          id='username'
          type={username.type}
          value={username.value}
          name='username'
          onChange={username.onChangue}
        />
      </div>
      <div>
        password
        <input
          id='password'
          type={password.type}
          value={password.value}
          name='password'
          onChange={password.onChangue}
        />
      </div>
      <button type='submit'>login</button>
    </form>
  );
};
