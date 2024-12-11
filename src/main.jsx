import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Accommodation from './pages/Accommodation'
import Unfound from './pages/Unfound'

import logo from './assets/images/logo.png'
import logo_alt from './assets/images/logo_alt.png'

import './assets/stylesheets/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <img src={logo} alt='Kasa Logo' />
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}>
            Accueil
          </NavLink>
          <NavLink to='/about'>A propos</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/accommodation/:id' element={<Accommodation />} />
          {/* <Route path='/404' element={<Unfound />} /> */}
          <Route path='*' element={<Unfound />} />
        </Routes>
      </main>
      <footer>
        <img src={logo_alt} alt='Kasa Logo' />
        <p>© 2024 Kasa. All rights reserved</p>
      </footer>{' '}
    </BrowserRouter>
  </StrictMode>
)
