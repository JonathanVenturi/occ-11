import PropTypes from 'prop-types'

function Banner({ background, label = '' }) {
  const bannerStyle = {
    backgroundImage: 'url(' + background + ')'
  }

  return (
    <div className='banner' style={bannerStyle}>
      {label != '' && <p>{label}</p>}
    </div>
  )
}

Banner.propTypes = {
  background: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default Banner
