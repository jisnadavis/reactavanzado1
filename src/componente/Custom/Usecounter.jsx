import { useState } from 'react'

export const Usecount = (initialvalue) => {
  const [count, setcount] = useState(initialvalue)
  const incrementclick = () => {
    setcount((prevcount) => prevcount + 1)
  }

  const decrememtclick = () => {
    setcount((prevcount) => prevcount - 1)
  }

  return { count, incrementclick, decrememtclick }
}
