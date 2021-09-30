import React, { useEffect, useState, useDispatch } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/user';

export const Home = () => {
  // const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getAllUsers().then((users) => setUsers(users));
  }, []);
  // list of the users
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};
