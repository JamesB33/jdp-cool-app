import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

function Nav({color}) {
  const activeStyle = {
    boxShadow: `0 0 16px ${color}`,
    borderRadius: '5px',
    padding: '4px 8px',
    color: `${color}`,
    backgroundColor: '#333',
    textDecoration: 'none',
    transition: '1s',
  };
  const dormant = {
    color: 'pink',
    padding: '4px 8px',
    textDecoration: 'none',
    transition: '1s',
  }

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <NavLink to='/colors' style={({ isActive }) => isActive ? activeStyle : dormant}>
            Colors
          </NavLink>
        </li>
        <li>
          <NavLink to='/' style={({ isActive }) => isActive ? activeStyle : dormant}>
            Main
          </NavLink>
        </li>
        <li>
          <NavLink to='/cool-page' style={({ isActive }) => isActive ? activeStyle : dormant}>
            Accordion
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
