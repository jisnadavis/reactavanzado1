import { useRef } from 'react'
import './cambiarcolor.css'

export const Cmbiarcolor = () => {
  const colorref = useRef(null)
  const changecolor = () => {
    colorref.current.className === 'box'
      ? (colorref.current.className = 'bomodify')
      : (colorref.current.className = 'box')
  }
  return (
    <div className='box' ref={colorref}>
      <button onClick={changecolor}>modifycolor</button>
    </div>
  )
}
