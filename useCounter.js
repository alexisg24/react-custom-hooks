import { useState } from 'react'

const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => setCounter(prev => prev + value)

  const decrement = (value = 1) => {
    if (counter === 0) return true
    setCounter(prev => prev - value)
  }

  const reset = () => setCounter(initialValue)

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export { useCounter }
