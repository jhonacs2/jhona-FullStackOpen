import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const prom = ((good + bad ) / 3 )
  const percentage = (good * 100) / total

  
  
  if((good || neutral || bad) === 0 ){
    return(
      <>
      <h3>No feedback given</h3>
      </>
    )
  }
  
  return (
    
      <table  >
        <tbody>
      <tr >
        <td style={{border: "1px solid #000"}}>Good</td>
        <td style={{border: "1px solid #000"}}>{good}</td>
      </tr>
      <tr>
        <td style={{border: "1px solid #000"}}>neutral</td>
        <td style={{border: "1px solid #000"}}>{neutral}</td>
      </tr>
      <tr>
        <td style={{border: "1px solid #000"}}>Bad</td>
        <td style={{border: "1px solid #000"}}>{bad}</td>
      </tr>
      <tr>
        <td style={{border: "1px solid #000"}}>average</td>
        <td style={{border: "1px solid #000"}}>{prom}</td>
      </tr>
      <tr>
        <td style={{border: "1px solid #000"}}>positive</td>
        <td style={{border: "1px solid #000"}}>{percentage}</td>
      </tr>
      </tbody>
    </table>
    
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

      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)