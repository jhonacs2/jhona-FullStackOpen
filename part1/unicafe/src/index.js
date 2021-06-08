import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const InfoCafe = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const prom = ((good + bad ) / 2 )
  
  const percentage = (good * 100) / total
  
  
  return (
    <>
      <p>all {total}</p>
      <p>average {prom}</p>
      <p>positive {percentage} %</p>
    </>
  )
}

const App = () => {
  
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

      <InfoCafe good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)