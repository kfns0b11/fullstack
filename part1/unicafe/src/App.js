import React, { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <>
    <button onClick={handleClick}>
      {text}
    </button>
  </>

)

const Header = ({ content }) => {
  return (
    <>
      <h1>{content}</h1>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => (
  <>
    <p>
      good {good} <br />
      neutral {neutral} <br />
      bad {bad} <br />
    </p>
  </>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(6)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header content="give feedback" />
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Header content="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App