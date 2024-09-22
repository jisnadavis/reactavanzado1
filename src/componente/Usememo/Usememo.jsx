//! UseMemo va ser una  herremienta tenga una syntaxis parecedia de useeffect,con el array de dependencia con una funcion callback
//!usememo va ser una herramientaque me permita memorizar unos calculas complejas(al equipo cliente le cuesta un esfuerzo cualcular.ordenar//aqui no iran peticiones irian useeffect(es para effectos segundario de nuestra pagina
//!))
import { useEffect, useMemo, useState } from 'react'
import './Usememo.css'
export const Usememo = () => {
  const [personas, setpersonas] = useState([
    { nombre: 'Ana', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Carlos', edad: 30, ciudad: 'Barcelona' },
    { nombre: 'Elena', edad: 22, ciudad: 'Valencia' },
    { nombre: 'David', edad: 28, ciudad: 'Sevilla' }
  ])
  const [personasorted, setpersonassorted] = useState([...personas])
  useMemo(() => {
    setpersonassorted(personas.toSorted((a, b) => a.edad - b.edad))
  }, [personas]) //este de array de dependencias nos indica que el contenido de ordenacion solo se volvera a ejucutar en caso de que las persona  cambien

  useEffect(() => {
    setTimeout(() => {
      setpersonas([
        ...personas,
        { nombre: 'alahandra', edad: 10, ciudad: 'madird' }
      ])
    }, 5000)
  }, [])
  return (
    <div className='usememo'>
      {personasorted.map((person) => (
        <div key={person.nombre}>
          <p>nombre:{person.nombre}</p>
          <p>edad:{person.edad}</p>
          <p> ciudad:{person.ciudad}</p>
        </div>
      ))}
    </div>
  )
}
