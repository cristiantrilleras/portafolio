import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'
import {Anchor} from '../Anchor/Anchor'

export const Header = () => {
  return (
    <div className='Header'>
      <a href="/">portafolio</a>
      <Navbar>
        <Anchor ruta="/" textAnchor = "Home"/>   
        <Anchor ruta="/about" textAnchor = "About Us"/>  
        <Anchor ruta="/services" textAnchor = "Services"/>  
        <Anchor ruta="/tienda" textAnchor = "Tienda"/>  
      </Navbar>
    </div>
  )
}
