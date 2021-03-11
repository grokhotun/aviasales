import React from 'react'

import './Header.scss'
import logo from '@/assets/images/logo.svg'

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
