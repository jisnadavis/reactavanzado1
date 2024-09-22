import { useMemo, useState } from 'react'

export const Usememoavanzado = ({ props }) => {
  const [render, setrender] = useState(false)
  const orderdposts = useMemo(() => {
    console.log('generating the courses...')
    return props
      .map((post) => ({
        ...post,
        date: new Date(post.date),
        title: post.title.split('-').join('').toUpperCase()
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
      .map((post) => ({
        ...post,
        date: new Intl.DateTimeFormat('es-ES').format(post.date)
      }))
  }, [props])
  return (
    <div>
      <ul>
        {orderdposts.map((post) => (
          <li key={post.title}>
            <h3>{post.title}</h3>
            {post.date}
            {post.data}
          </li>
        ))}
      </ul>

      <button onClick={() => setrender(!render)}> render</button>
    </div>
  )
}
