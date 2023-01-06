import './NavBar.css';
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
const NavBar = () => {
  return (
    <nav>
      <div className="NavBar">
        <Link to='/' className='nav-item nav-btn'>
         <img src={logo} alt='logo'className='nav-image' />
        </Link>
      <Link to='/' className='nav-item nav-btn'>About</Link>
      <Link to='/' className='nav-item nav-btn'>Products</Link>
      <Link to='/' className='nav-item nav-btn'>For Teams</Link>
      

      </div>
    </nav>
  )
}
     
export default NavBar