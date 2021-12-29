import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <>
    <button onClick={handleClick}>
      {text}
    </button>
  </>
)

const MostVotes = ({ anecdotes, votes }) => {
  console.log(anecdotes, votes)
  const highestCount = Math.max(...votes)

  const indexs = []
  let index = votes.indexOf(highestCount)
  while (index !== -1) {
    indexs.push(index)
    index = votes.indexOf(highestCount, index+1)
  }

  console.log("highestCount", highestCount, "indexs", indexs, "index", index)
  if (highestCount === 0) {
    return (
      <>
        <p>No votes yet</p>
      </>
    )
  }

  return (
    <>
      {
        indexs.map(item => (
          <p>
            {anecdotes[item]}
          </p>
        ))
      }
      <p>has {highestCount} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)

  const anecdotesLen = anecdotes.length
  const [votes, setVotes] = useState(Array(anecdotesLen).fill(0))



  const getRandomInt = (max) => Math.floor(Math.random() * max)

  const handleRandomClick = () => {
    let random = getRandomInt(anecdotesLen)
    while (random === selected) {
      random = getRandomInt
    }
    setSelected(random)
  }
  const handleVotesClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVotesClick} text="vote" />
      <Button handleClick={handleRandomClick} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App