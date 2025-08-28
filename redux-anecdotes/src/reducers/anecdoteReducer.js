import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    createAnecdote(state, action) {
      console.log("Create anecdote", state, action)
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
      return action.payload
    }
  }
})

export const { createAnecdote, vote, setAll } = anecdoteSlice.actions
export default anecdoteSlice.reducer
