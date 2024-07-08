import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open,setOpen]=useState(false); 
    const user=false
  return (
    <nav>
       <div className="left">
         <a href="/" className='logo'>
         <img src="/logo.png" alt="" />
         <span>MaterialEstate</span>
         </a>
         <a href="/">Home</a>
         <a href="/">About</a>
         <a href="/">Contact</a>
         <a href="/">Agents</a>
       </div>
       <div className="right">
        { user ? ( 
        <div className='user'>
          <img src="./Myimage.jpg" alt="" />
          <span>John Doe</span>
          <Link to="/profile" className='profile'>
          <div className="notification">3</div>
          <span>Profile</span>
          </Link>
        </div>) : (
          <>
        <a href="/">Sign in</a>
        <a href="/" className='register'>Sign up</a> </>)}
        <div className="menuIcon"> 
            <img src="./menu.png" onClick={()=>setOpen((open)=>!open)} alt="" />
        </div>
        <div className={open ? "menu active": "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
        </div>
       </div>
    </nav>
  )
}
