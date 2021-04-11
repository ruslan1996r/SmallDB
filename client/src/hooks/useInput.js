import { useState } from 'react'

function useInput(initialValue) {
  const [state, setValue] = useState(initialValue)

  const setState = event => {
    setValue(event.target.value)
  }
  const setByKey = (e, key) => {
    setValue((state) => ({ ...state, [key]: e.target.value }))
  }

  return {
    state,
    setState,
    setByKey,
    setValue
  }
}

export { useInput }