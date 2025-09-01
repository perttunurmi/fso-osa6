import { createAnecdote } from "../requests"
import { useQuery, useMutation, QueryClient, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import NotificationContext from "../NotificationContext"

const AnecdoteForm = () => {
  const [notification, dispatch] = useContext(NotificationContext)
  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (obj) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      dispatch({ type: 'MSG', payload: `Created new anecdote '${obj.content}'` })
      setTimeout(() => dispatch({}), 5000)
    },
    onError: () => {
      dispatch({ type: 'MSG', payload: `too short anecdote, must have length 5 or more` })
      setTimeout(() => dispatch({}), 5000)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 })
    console.log('new anecdote')
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
