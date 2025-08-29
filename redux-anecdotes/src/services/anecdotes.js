import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const obj = { content: content, votes: 0 }
  const response = await axios.post(baseUrl, obj)
  return response
}

const vote = async (id) => {
  const current = await axios.get(`${baseUrl}/${id}`)
  const updatedAnecdote = { ...current.data, votes: current.data.votes + 1 }
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return response.data
}

export default { getAll, createNew, vote }
