import { useCallback, useState } from 'react'
import './Usecallback.css'
export const Usecallback = () => {
  //! useCallback me permite guardar una función para que aunque re-rendericemos nuestro componente esa función no se vuelva a DECLARAR
  const [numero, setnumero] = useState(0)
  console.log('re rendriza componente')
  const saludar = useCallback(() => {
    console.log('hola como estas')
  }, [])
  return (
    <div className='usecallback'>
      <h1 onClick={() => setnumero(numero + 1)}>{numero}</h1>
      <button onClick={saludar}>saludar</button>
    </div>
  )
}
