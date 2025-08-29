import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"
import anecdotes from "../services/anecdotes"

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      console.log("Vote", state, action)
      return state.map((anecdote) => anecdote.id === action.payload
        ? { ...anecdote, votes: anecdote.votes + 1 }
        : anecdote
      )
    },
    setAll(state, action) {
      return state = action.payload
    },
    replaceAnecdote(state, action) {
      const id = action.payload.id
      const newObj = action.payload
      return state.map((anecdote) => {
        return anecdote.id === id
          ? { ...newObj }
          : anecdote
      })
    }
  }
})

export const { appendAnecdote, vote, setAll, replaceAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote.data))
  }
}

export const getAll = _ => {
  return async dispatch => {
    const newState = await anecdoteService.getAll()
    dispatch(setAll(newState))
  }
}

export const addVote = id => {
  return async dispath => {
    const response = await anecdoteService.vote(id)
    dispath(replaceAnecdote(response))
  }
}
