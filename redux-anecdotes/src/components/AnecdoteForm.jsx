import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('add Anecdote', content)
    event.target.anecdote.value = ''

    const response = await anecdoteService.createNew(content)
    dispatch(createAnecdote(response.data))

    dispatch(setMessage(`created ${content}`))
    setTimeout(() => {
      dispatch(clearMessage())
    }, 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" required /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm 
