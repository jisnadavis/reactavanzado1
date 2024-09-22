import { useContext } from 'react'
import { usercontext } from './Component'

export const Componenet3 = () => {
  const user = useContext(usercontext)
  return (
    <div>
      <h1>hello how are you {user}</h1>
    </div>
  )
}
