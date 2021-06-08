import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
  }
  const clickNeutral = (newValue) => {
    setNeutral(neutral + 1)
  }
  const clickBad = (newValue) => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Button handleClick = {() => clickGood()} text = "good" />
      <Button handleClick = {() => clickNeutral()} text = "neutral" />
      <Button handleClick = {() => clickBad()} text = "bad" />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>Bad {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)