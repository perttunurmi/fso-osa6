import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('add Anecdote', content)
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))

    dispatch(setNotification(`created ${content}`))
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" required /></div>
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm 
