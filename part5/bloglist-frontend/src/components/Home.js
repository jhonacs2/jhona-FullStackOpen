import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/user';

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    userService.getAllUsers().then((users) => setUsers(users));
  }, []);

  // list of the users
  return (
    <div>
      <h2>Users</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>User</th>
            <th>Blogs Created</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody key={user.id}>
            <tr>
              <td>
                <Link to={`/blogs/${user.id}`}>{user.username}</Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default React.memo(Home);
