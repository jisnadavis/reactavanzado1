import React from 'react'
import { Usecount } from '../Custom/Usecounter'

export const Counter = () => {
  const { count, incrementclick, decrememtclick } = Usecount(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementclick}> +</button>
      <button onClick={decrememtclick}> -</button>
    </div>
  )
}
