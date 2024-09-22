import PropTypes from 'prop-types'
import React from 'react'
export const Memo = React.memo(({ title, poster }) => {
  console.log('executing memeo')
  return (
    <div>
      <h1>{title}</h1>
      <img src={poster} alt={title}></img>
    </div>
  )
})
Memo.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}
