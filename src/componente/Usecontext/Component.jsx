import { createContext, useState } from 'react'
import { Component2 } from './Component2'

export const usercontext = createContext()
export const Component1 = () => {
  const [user, setuser] = useState('jisna davis')
  return (
    <usercontext.Provider value={user}>
      <div>
        <h2> hola bienvenido{user}</h2>
        <input
          type='text'
          value={user}
          onChange={(e) => {
            setuser(e.target.value)
          }}
        ></input>
        <Component2></Component2>
      </div>
    </usercontext.Provider>
  )
}
