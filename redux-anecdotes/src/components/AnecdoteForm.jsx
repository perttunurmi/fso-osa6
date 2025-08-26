import { createAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('add Anecdote', content)
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <form onSubmit={addNote}>
      <div><input name="anecdote" required /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm 
