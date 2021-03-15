import React from 'react'
import logo from '@/assets/images/logo.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Aviasales Logo" />
      </div>
    </header>
  )
}

export default Header
