import PropTypes from 'prop-types'

export const Review = ({ title, score }) => {
  console.log('executing review')
  return (
    <div className='review-container'>
      <h2>{title}</h2>
      <p>{score}</p>
    </div>
  )
}
Review.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}
