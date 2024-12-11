import { Link } from 'react-router'
import PropTypes from 'prop-types'

function Card({ id, label, image }) {
  const cardStyle = {
    background: 'center url(' + image + '), linear-gradient(#FFFFFF, #888888)'
  }

  return (
    <Link to={'/accommodation/' + id}>
      <div className='card' style={cardStyle}>
        <span>{label}</span>
      </div>
    </Link>
  )
}

export default Card

Card.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}
