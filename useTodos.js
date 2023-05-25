import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialFunc = () => {
  return JSON.parse(window.localStorage.getItem('todos')) || []
}

const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], initialFunc)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (todo) => {
    const action = {
      type: 'ADD',
      payload: todo
    }
    dispatch(action)
  }

  const handleDelete = (todoID) => {
    const action = {
      type: 'DELETE',
      payload: todoID
    }
    dispatch(action)
  }

  const handleToggle = (todoID) => {
    const action = {
      type: 'TOGGLE',
      payload: todoID
    }
    dispatch(action)
  }

  const todoCounter = todos.length

  const todoPending = todos.filter(({ done }) => !done).length
  return { todos, handleSubmit, handleDelete, handleToggle, todoCounter, todoPending }
}

export { useTodos }
