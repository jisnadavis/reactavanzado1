import { useEffect, useReducer } from 'react'
import './Usereduce.css'
//! use reducer lo vamos a utilizar en proyecto medianos/grandes para mejorar la flexibilidad nuestra pagina la abstracion de la funcionalidad por un lado y por otro la maquetacion maquetación y por aglutinar varios estados de una misma colección (si tengo una página de personajes de rick y morty, todo lo que tenga que ver con esa página es lo que meto en el reducer)
import { fetchapi } from '../../Peticion/Peticion.action'
import { INITIAL_STATE, peticionreducer } from '../../Peticion/Peticion.reducer'
const Usereducer = () => {
  const [state, dispatch] = useReducer(peticionreducer, INITIAL_STATE)
  const { page, loading, character } = state
  useEffect(() => {
    fetchapi(dispatch, page)
  }, [page])

  return (
    <>
      <div>
        {loading ? (
          <img src='https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif'></img>
        ) : (
          character.map((ch) => <img key={ch.id} src={ch.image} />)
        )}
        <button onClick={() => dispatch({ type: 'sumpage' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrease' })}></button>
      </div>
    </>
  )
}

export default Usereducer
