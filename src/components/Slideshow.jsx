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
  function goToSlide(index) {
    setIndex(index)
  }

  if (slides.length < 2) {
    return (
      <div className='slideshow'>
        <div className='slide' style={slideStyle}></div>
      </div>
    )
  } else {
    return (
      <div className='slideshow'>
        <div onClick={previousSlide} className='previous'>
          &#9204;
        </div>
        <div className='slide' style={slideStyle}></div>
        <div onClick={nextSlide} className='next'>
          &#9205;
        </div>
        <div className='selector'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={slideIndex == pictureIndex ? 'current' : ''}>
              &#8226;
            </div>
          ))}
        </div>
      </div>
    )
  }
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Slideshow
