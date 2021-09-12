import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
    NavLogo,
    IconContainer,
    NavLink,
    NavItem,
    Bars,
    Times
  } from './NavbarElement';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Nav>
        <NavLogo to='/' onClick={closeMobileMenu}>
          PokeList
        </NavLogo>
        <IconContainer onClick={handleClick}>
          {click ? (<Times />): (<Bars />)}
        </IconContainer>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <NavItem>
            <NavLink to='/my-pokemon' onClick={closeMobileMenu}>
              My Pokemon
            </NavLink>
          </NavItem>
        </ul>
      </Nav>
    </>
  );
}

export default Navbar;