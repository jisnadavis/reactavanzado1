import { useModal } from '../Custom/Usemodal'
import './Card.css'

export const Card = () => {
  const { open, abrir, cerrar } = useModal(true)
  return (
    <div className='card'>
      <button onClick={open ? cerrar : abrir}>
        {open ? 'cerrar' : 'open'}
      </button>
      <div className='modal' style={{ display: open ? 'flex' : 'none' }}>
        <h1>hello</h1>
      </div>
    </div>
  )
}
