import React from 'react'
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
        
<span className='logo'>

<FontAwesomeIcon icon={faPlaneDeparture} />
Airlinebooking</span>
<div className='navItem'>
<button className='navButton'>Register</button>
<button className='navButton'>Login</button>
</div>
</div>
    </div>
        
  )
}
