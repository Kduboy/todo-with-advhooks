import React from 'react';
import Logo from '../../assets/img/is-logo.png';
import './NavBar.scss'


const NavBar = () => {
  return (
    <div className='navBar'>
      <img src={Logo} className='logoNav' alt='' />
      <h1 className='appTitle'>Lista de Tareas</h1>
    </div>)
};

export default NavBar;