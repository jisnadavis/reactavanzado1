import React from 'react'

export const Deleteuser = React.memo(({ deleteuser, name }) => {
  console.log('delete user renderarizado')
  return (
    <div>
      <button onClick={deleteuser}>{name}</button>
    </div>
  )
})
