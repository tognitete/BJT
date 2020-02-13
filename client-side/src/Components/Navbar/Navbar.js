import React from 'react'
import { Link, NavLink,Route } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
      <div>
        <ul>
        <li><NavLink to='/'>Audio-Plugin</NavLink></li>  
        <li className="right"><NavLink to='/'>Profil</NavLink></li>
        <li className="right"><NavLink to='/'>Soumettre</NavLink></li>
        <li className="right"><NavLink to='/description'>Plugins</NavLink></li>
        </ul>
      </div>
      </nav>

      
   </>
  )
}

export default Navbar