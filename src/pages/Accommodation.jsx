import { useParams, Navigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

import Collapse from '../components/Collapse'
import Slideshow from '../components/Slideshow'

function Accommodation() {
  const { id } = useParams()
  const { data, isPending, error } = useFetch('/logements.json')

  function ratingStars(stars) {
    const starOutput = []
    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        starOutput.push(
          <span key={'star' + i} className='redstar'>
            ★
          </span>
        )
      } else {
        starOutput.push(
          <span key={'star' + i} className='greystar'>
            ★
          </span>
        )
      }
    }
    return starOutput
  }

  if (!isPending && !error && data) {
    const accommodationData = data.find((acc) => acc.id.includes(id))

    if (!accommodationData) {
      return <Navigate to='/404' />
    } else {
      return (
        <article className='accommodation'>
          <Slideshow slides={accommodationData.pictures} />
          <div className='infos'>
            <div className='accommodationinfo'>
              <h1>{accommodationData.title}</h1>
              <h2>{accommodationData.location}</h2>
              <ul className='taglist'>
                {accommodationData.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className='secondaryinfo'>
              <div className='hostinfo'>
                <span>{accommodationData.host.name}</span>
                <img src={accommodationData.host.picture} />
              </div>
              <div className='rating'>
                {ratingStars(accommodationData.rating)}
              </div>
            </div>
          </div>

          <div className='details'>
            <Collapse label='Description'>
              <p>{accommodationData.description}</p>
            </Collapse>

            <Collapse label='Équipements'>
              <ul>
                {accommodationData.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </article>
      )
    }
  }
}

export default Accommodation
