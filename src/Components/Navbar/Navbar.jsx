import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



export default function Navbar() {
  return (
    <div className='main'>
        <div className='logo'></div>
      <ul>
       
         
    <li ><Link to='/'>Home</Link></li>
    <li><Link to='/About'>About</Link></li>
    <li><Link to='/Contact'>Contact</Link></li>
    <li><Link to='/Login'>Login</Link></li>

      </ul>
    </div>
  )
}
