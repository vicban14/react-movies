import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../styles/images/react-movies.svg'

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to='/'>
          <Logo className='logo' />
          <h1>REACT MOVIES</h1>
        </NavLink>
        <NavLink to='/popular'>
          <span className='popular'>Populares</span>
        </NavLink>
        <NavLink to='/upcoming'>
          <span className='upcoming'>Próximos estrenos</span>
        </NavLink>
        <NavLink to='/top_rated'>
          <span className='top-rated'>Más votadas</span>
        </NavLink>
      </div>
    </header>
  )
}

export default Header