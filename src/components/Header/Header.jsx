import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <NavLink to='/popular'>
        <span className='popular'>POPULARES</span>
      </NavLink>
      <NavLink to='/upcoming'>
        <span className='upcoming'>PRÓXIMOS ESTRENOS</span>
      </NavLink>
      <NavLink to='/top_rated'>
        <span className='top-rated'>MÁS VOTADAS</span>
      </NavLink>
    </header>
  )
}

export default Header