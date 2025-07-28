import logo from '../assets/M K S-Photoroom.png'
import React from 'react'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (

      <div className='flex justify-between px-5 bg-stone-50'>
        <NavLink to="/" className="font-medium text-xl">
            <div >
          <img src={logo} className='h-16 w-44' alt='logo' />
        </div>
            </NavLink>
        <div className='flex w-80 gap-5 items-center'>
            
            <NavLink to="/Mens" className="font-medium text-xl">Mens</NavLink>
            <NavLink to="/Womens" className="font-medium text-xl">Womens</NavLink>
            <NavLink to="/Kids" className="font-medium text-xl">Kids</NavLink>
            <NavLink to="/cart" className="font-medium text-xl">
            <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
        </div>
      </div>

  )
}

export default NavBar
