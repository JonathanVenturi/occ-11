import { Fragment } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import useFetch from '../hooks/useFetch'
import background from '../assets/images/background_1.png'

function Home() {
  const { data, isPending, error } = useFetch('/logements.json')

  return (
    <>
      <Banner
        label={'Chez vous, partout et ailleurs'}
        background={background}
      />

      <div className='listing'>
        {isPending && <div>Loading....</div>}
        {error && <div>{error}</div>}
        {data &&
          data.map((accomodation) => (
            <Fragment key={accomodation.id}>
              <Card
                id={accomodation.id}
                label={accomodation.title}
                image={accomodation.cover}
              />
            </Fragment>
          ))}
      </div>
    </>
  )
}

export default Home
