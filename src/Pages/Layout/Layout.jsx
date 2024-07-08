import React from 'react'
import Navbar from '../../components/Navbar'
import HomePage from '../Homepage/homePage'
import './layout.scss'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='layout'>
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="content">
             <Outlet/>
      </div>
    </div>
  )
}
