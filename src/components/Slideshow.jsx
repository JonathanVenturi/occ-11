import { useState } from 'react'
import PropTypes from 'prop-types'

function Slideshow({ slides }) {
  const [pictureIndex, setIndex] = useState(0)
  const slideStyle = {
    backgroundImage: 'url(' + slides[pictureIndex] + ')'
  }

  function previousSlide() {
    setIndex(pictureIndex === 0 ? slides.length - 1 : pictureIndex - 1)
  }
  function nextSlide() {
    setIndex(pictureIndex === slides.length - 1 ? 0 : pictureIndex + 1)
  }

  return (
    <div className='slideshow'>
      <div onClick={previousSlide} className='previous'>
        &#9204;
      </div>
      <div className='slide' style={slideStyle}></div>
      <div onClick={nextSlide} className='next'>
        &#9205;
      </div>
    </div>
  )
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Slideshow
