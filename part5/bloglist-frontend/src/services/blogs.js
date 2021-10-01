import axios from 'axios';
const baseUrl = '/api/blogs';

let token = null;
const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createBlog = (newBlog) => {
  const config = {
    headers: { Authorization: token },
  };

  const request = axios.post(baseUrl, newBlog, config);
  return request.then((response) => response.data);
};

const likeBlog = (id, newLike) => {
  const request = axios.put(`${baseUrl}/${id}`, newLike);
  return request.then((response) => response.data);
};

const deleteBlog = (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.delete(`${baseUrl}/${id}`, config);
  return request.then((response) => response.data);
};

export default { getAll, setToken, createBlog, likeBlog, deleteBlog };
