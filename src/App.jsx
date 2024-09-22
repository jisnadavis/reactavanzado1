import { useContext } from 'react'
import './App.css'
//import { Codedelete } from './componente/Usecallback/Codedelete'
import { Component1 } from './componente/Usecontext/Component'
import { Themeswitch } from './componente/Usecontext/Themeswitch'
import { Themecontext } from './context/Themecontext'
import { Counter } from './componente/customhooks/Counter'
import { Toogle } from './componente/Custom/Toogle'
import { Usewindow } from './componente/Custom/Usewindow'
//import { Usecallbackavanzado } from './componente/Usecallback/Usecallbackavanzado'
//import { Usememo } from './componente/myexcercise/Usememo/Usememo'
//import { Usememosimple } from './componente/myexcercise/Usememosimple/Usememosimple'
//import { Usememoavanzado } from './componente/Usememoavanzado/Usememoavanzado'
//import { Useref } from './componente/Useref/Useref'
//import { Useref1 } from './componente/Useref1/Useref1'
//import { Cmbiarcolor } from './componente/Userefavanzado/Cmbiarcolor'
//import { CodeTaxCalculator } from './componente/Userefavanzado/codetexcalculater'
//import { Userefavanzado } from './componente/Userefavanzado/Userefavanzado'
//import { Memo } from './componente/Memo/Memo'
//import { Review } from './componente/Review/Review'
//import { Card } from './componente/customhooks/Card'
//import { Useref } from './componente/Useref/Useref'
//import { Usecallback } from './componente/Usecallback/Usecallback'
//import { Useref } from './componente/Useref/Useref'
//import { Usememo } from './componente/Usememo/Usememo'
const courses = [
  {
    title: 'Introduction- to -Programming',
    date: '2024-09-01',
    description:
      'Learn the basics of programming using Python. This course covers variables, loops, and functions.'
  },
  {
    title: 'Web Development- with- HTML, CSS, and JavaScript',
    date: '2024-09-15',
    description:
      'A comprehensive guide to building modern, responsive websites using HTML, CSS, and JavaScript.'
  },
  {
    title: 'Data -Structures -and Algorithms',
    date: '2024-10-01',
    description:
      'Explore the core concepts of data structures and algorithms, including arrays, linked lists, trees, and sorting algorithms.'
  },
  {
    title: 'Database- Management -Systems',
    date: '2024-10-20',
    description:
      'Understand the fundamentals of relational databases, SQL queries, and database design in this introductory course.'
  },
  {
    title: 'Data  -and Algorithms',
    date: '2024-10-01',
    description:
      'Explore the core concepts of data structures and algorithms, including arrays, linked lists, trees, and sorting algorithms.'
  }
]

function App() {
  const { theme } = useContext(Themecontext)
  const { width, height } = Usewindow()
  return (
    <>
      <div className={`app color-${theme}`}>
        <header>
          <Themeswitch></Themeswitch>
        </header>
        <div>
          <Component1></Component1>
          <Counter></Counter>
          <Toogle></Toogle>
        </div>
        <div>
          <h2>
            width:{width}
            height:{height}
          </h2>
        </div>
      </div>
    </>
  )
}
//! useEffect para efectos secundarios, como peticiones a una API
//! useMemo para memoizar calculos complejos
//! useCallback para mantener la declaración de una función en el renderizado del componente y no tener que volver a declararla

export default App
