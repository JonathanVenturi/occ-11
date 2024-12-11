import { Link } from 'react-router'

function Unfound() {
  return (
    <div className='error'>
      <h1 className='errorcode'>404</h1>
      <h1>Oups! La page que vous demandez n&apos;existe pas.</h1>
      <Link to='/'>Retourner sur la page d&apos;accueil</Link>
    </div>
  )
}

export default Unfound
