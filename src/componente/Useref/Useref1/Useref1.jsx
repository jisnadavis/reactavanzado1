import { useRef, useState } from 'react'

export const Useref1 = () => {
  const [name, setname] = useState('alberto')
  const textinput = useRef(null)
  const printname = () => {
    const inputvalue = textinput.current?.value
    if (inputvalue) {
      setname(inputvalue)
    }
    console.log('impro ', inputvalue)
  }

  return (
    <div>
      <h1>hola soy {name}</h1>
      <input type='text' ref={textinput}></input>
      <button onClick={() => printname()}> mostrar</button>
    </div>
  )
}
