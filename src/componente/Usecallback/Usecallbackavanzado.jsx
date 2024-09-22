import { useCallback, useState } from 'react'
import { Button } from './Button'

export const Usecallbackavanzado = () => {
  console.log('counter renderd')
  const [countone, setcountone] = useState(0)
  const [counttwo, setcounttwo] = useState(0)
  const memocount1 = useCallback(() => {
    setcountone(countone + 1)
  }, [countone])
  const memocount2 = useCallback(() => {
    setcounttwo(counttwo + 1)
  }, [counttwo])
  return (
    <div>
      <h3>
        {countone}||{counttwo}
      </h3>
      <Button handleclick={memocount1} name='button1'></Button>
      <Button handleclick={memocount2} name='button2'></Button>
    </div>
  )
}
