import { useRef } from 'react'
import { useModal } from '../Custom/Usemodal'

export const Useref = () => {
  const { open, cerrar } = useModal(true)
  const refinput = useRef()
  const saludar = () => {
    console.log('hello how do you do' + refinput.current.value)
  }

  return (
    <div className='useref'>
      <input ref={refinput} className='input'></input>
      <button onClick={saludar}>enviar</button>

      <button onClick={cerrar}>cerrarmodal</button>
      <div className='modal' style={{ display: open ? 'flex' : 'none' }}></div>
    </div>
  )
}
