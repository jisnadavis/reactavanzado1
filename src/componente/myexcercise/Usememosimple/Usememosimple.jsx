import { useMemo, useState } from 'react'

const numlist = [1, 2, 3, 47, 78]
const mapsscore = (score, caller) => {
  console.log('llamaos este funcion ', caller)
  return score.map((num, index) => {
    const calc = (num * 3) / 2
    const color = calc > 10 ? '❤️' : '💚 '
    return (
      <p key={index}>
        {calc}
        {color}
      </p>
    )
  })
}
export const Usememosimple = () => {
  const [render, setrender] = useState(false)
  const marksnomemo = mapsscore(numlist, 'withoutmemo')
  const markswithmemo = useMemo(() => {
    return mapsscore(numlist, 'withmemo')
  }, [])
  return (
    <div>
      <div>
        <h2>nomemo</h2>
        {marksnomemo}
      </div>
      <div>
        <h2>withmemo</h2>
        {markswithmemo}
      </div>

      <button onClick={() => setrender(!render)}> render</button>
    </div>
  )
}
