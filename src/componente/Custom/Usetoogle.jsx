import { useCallback, useState } from 'react'

export const Usetoogle = () => {
  const [state, setstate] = useState('false')
  const handler = useCallback(() => {
    setstate((prevalue) => !prevalue)
  }, [])
  return [state, handler]
}
