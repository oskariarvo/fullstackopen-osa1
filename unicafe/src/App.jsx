import { useState } from 'react'


const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text, value, additionalString}) => {
  return (
    <tr>
      <td>{text}</td><td>{value} {additionalString}</td>
    </tr>
  )
}

const Statistics = ({goodCount, neutralCount, badCount}) => {
  const wholeCount = goodCount + neutralCount + badCount
  if (wholeCount === 0) {
    return <div>No feedback given</div>
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={goodCount}/>
          <StatisticLine text={"neutral"} value={neutralCount}/>
          <StatisticLine text={"bad"} value={badCount}/>
          <StatisticLine text={"all"} value={wholeCount}/>
          <StatisticLine text={"average"} value={(goodCount - badCount) / wholeCount}/>
          <StatisticLine text={"positive"} value={(goodCount / wholeCount) * 100} additionalString={"%"}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text={"good"}/>
        <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
        <Button handleClick={() => setBad(bad + 1)} text={"bad"}/>
      </div>
      <h1>statistics</h1>
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad}/>
    </div>
  )
}

export default App