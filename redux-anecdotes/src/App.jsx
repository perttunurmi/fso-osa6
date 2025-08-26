import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)

    return {
      type: "VOTE",
      payload: {
        id: id
      }
    }
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    console.log('add Anecdote', content)
    event.target.anecdote.value = ''

    dispatch({
      type: 'NEW',
      payload: {
        content: content,
        id: (100000 * Math.random()).toFixed(0)
      }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" required /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
