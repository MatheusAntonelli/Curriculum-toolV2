import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <nav className='menu-header'>
        <ul className='ul-header'>
            <Link to={"/"}> <div className="header-logo"><img src="" alt="" srcset="" /></div></Link>
            <Link to={"/community"}><li>Curriculos da comunidade</li></Link>
            <Link to={"/objetivos"}><li>Objetivos do projeto</li></Link>
            <Link to={'/login'}><li>Login</li></Link>   
        </ul>
      </nav>
        
    </div>
  )
}

export default Header
