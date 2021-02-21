import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
      <span className="populares">POPULARES</span>
      <span className="upcoming">PRÓXIMOS ESTRENOS</span>
      <span className="top-rated">MÁS VOTADAS</span>
    </header>
  )
}

export default Header