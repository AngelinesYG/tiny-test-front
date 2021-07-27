import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const Nav = () => {
   const navStyle = {
      color: 'grey'
   };
   return (
      <nav>
         <h3>TINY</h3>
         <ul className="nav-links">
            <Link style={navStyle} to="/">
            <li>Home</li>
            </Link>
            <Link style={navStyle} to="/recipes">
            <li>Recipes</li>
            </Link>
            <Link style={navStyle} to="/welcome">
            <li>Customer Profile</li>
            </Link>
         </ul>
      </nav>
   )
}
export default Nav
