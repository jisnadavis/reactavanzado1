//! un customHook es literalmente una función, no es más que una función.
//! sin embargo se le denomina customHook porque puede utilizar estados y crearlos como si fuese un componente

//! no se le denomina componente porque no renderiza contenido de JSX

import { useState } from 'react'

export const useModal = (value) => {
  const [open, setOpen] = useState(value)

  const abrir = () => {
    setOpen(value)
  }

  const cerrar = () => {
    setOpen(!value)
  }

  return {
    open,
    abrir,
    cerrar
  }
}
