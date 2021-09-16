import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAllAnecdotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createAnecdote = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const updateVoteAnecdote = async (anecdote) => {
  const request = axios.put(`${baseUrl}/${anecdote.id}`, {
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  return request.then((response) => response.data);
};

export default { getAllAnecdotes, createAnecdote, updateVoteAnecdote };
