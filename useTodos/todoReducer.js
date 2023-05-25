const todoReducer = (initialState = [], action) => {
  const opt = {
    ADD: [...initialState, action?.payload],
    DELETE: initialState.filter(({ id }) => id !== action?.payload),
    TOGGLE: initialState.map(todo => {
      return (todo.id === action?.payload)
        ? { ...todo, done: !todo.done }
        : todo
    })
  }

  return opt[action?.type] ?? initialState
}

export { todoReducer }
