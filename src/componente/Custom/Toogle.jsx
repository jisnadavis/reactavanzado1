import { Usetoogle } from './Usetoogle'

export const Toogle = () => {
  const [tooglestate, handler] = Usetoogle()
  return (
    <div>
      <h1>{tooglestate.toString()}</h1>
      <button onClick={handler}>toogle</button>
    </div>
  )
}
