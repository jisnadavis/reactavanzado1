import React, { useCallback, useState } from 'react'
import { Deleteuser } from './Deleteuser'

export const Codedelete = () => {
  const [user, setuser] = useState({ name: 'jisna', surname: 'davis', age: 31 })
  const deleteusercallback = useCallback(() => {
    console.log('deleting the user')
    setuser({ name: '', surname: '', age: '' })
  }, [])
  return (
    <div>
      <h1>
        {user.name}
        {user.surname}
        {user.age}
      </h1>
      <input
        type='text'
        value={user.name}
        onChange={(e) => {
          setuser({ ...user, name: e.target.value })
        }}
      ></input>
      <input
        type='text'
        value={user.surname}
        onChange={(e) => {
          setuser({ ...user, surname: e.target.value })
        }}
      ></input>
      <input
        type='number'
        value={user.age}
        onChange={(e) => {
          setuser({ ...user, age: e.target.value })
        }}
      ></input>
      <Deleteuser deleteuser={deleteusercallback} name={'reset'}></Deleteuser>
    </div>
  )
}
