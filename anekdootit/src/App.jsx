import { useState } from 'react'

const Header = ({ text }) => {
  return <h1>{text}</h1>
}
const Anecdote = ({anecdotes, selected}) => {
  return <div>{anecdotes[selected]}</div>
}
const Votes = ({points, selected, beforePoint, afterPoint}) => {
  return <div>{beforePoint} {points[selected]} {afterPoint}</div>
}
const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const handleNextClick = () => {
    let x = Math.floor(Math.random() * anecdotes.length)
    console.log(x)
    setSelected(x)
  }
  const handleVoteClick = () => {
    const copy = [ ...points ]
    copy[selected] += 1
    setPoints(copy)
  }
  const largest = () => {
    return points.indexOf(Math.max(...points))
  }

  return (
    <div>
      <Header text={"Anecdote of the day"} />
      <Anecdote anecdotes={anecdotes} selected={selected} />
      <Votes points={points} selected={selected} beforePoint={"has"} afterPoint={"votes"} />
      <Button handleClick={handleVoteClick} text={"vote"} />
      <Button handleClick={handleNextClick} text={"next anecdote"} />
      <Header text={"Anecdote with most votes"} />
      <Anecdote anecdotes={anecdotes} selected={largest()} />
    </div>
  )
}

export default App