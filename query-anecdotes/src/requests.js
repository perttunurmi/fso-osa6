import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
}

export const createAnecdote = async (anecdote) => {
  const res = await axios.post(baseUrl, { content: anecdote.content, votest: anecdote.votes })
  return res.data
}

export const getById = async (id) => {
  const res = await axios.post(`${baseUrl}/${id}`)
  return res.data
}

export const vote = async (anecdote) => {
  const res = await axios.put(`${baseUrl}/${anecdote.id}`, { ...anecdote, votes: anecdote.votes + 1 })
  return res.data
}
