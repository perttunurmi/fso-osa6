import { vote } from '../reducers/anecdoteReducer'
import { setMessage, clearMessage } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const state = useSelector(state => state)
  const anecdotes = state.anecdote

  console.log("state: ", state)
  console.log("anecdotes: ", anecdotes)
  const dispatch = useDispatch()

  const handleClick = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(setMessage(`you voted ${anecdote.content}`))
    setTimeout(() => {
      dispatch(clearMessage())
    }, 5000)
  }

  return (
    <div>
      {
        anecdotes
          .filter(anecdote => anecdote.content.includes(state.filter))
          .sort((a, b) => b.votes - a.votes)
          .map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => handleClick(anecdote)}>vote</button>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default AnecdoteList
