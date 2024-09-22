export const fetchapi = async (dispatch, page) => {
  dispatch({ type: 'loading' })

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  )
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  const result = await res.json()
  setTimeout(() => {
    dispatch({ type: 'character', payload: result.results })
  }, 5000)
}
