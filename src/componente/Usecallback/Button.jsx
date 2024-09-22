import React from 'react'

export const Button = React.memo(({ handleclick, name }) => {
  console.log(`Button ${name} rendered`)
  return (
    <div>
      <button onClick={handleclick}>{name}</button>
    </div>
  )
})
