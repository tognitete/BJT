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
        <li className="right"><NavLink to='/tester'>Tester</NavLink></li>
        <li className="right"><NavLink to='/'>Login</NavLink></li>
        <li className="right"><NavLink to='/signup'>Signup</NavLink></li>
        <li className="right"><NavLink to='/formulaire'>Soumettre</NavLink></li>
        <li className="right"><NavLink to='/logout'>Logout</NavLink></li>
        <li className="right"><NavLink to='/affichagePlugins'>Plugins</NavLink></li>
        
        
      
       
        </ul>
      </div>
      </nav>

      
   </>
  )
}

export default Navbar