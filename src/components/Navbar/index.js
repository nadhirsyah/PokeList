import React, { useState } from 'react'
import {
    Nav,
    NavLink,
    NavMenu,
    Bars,
    Times
  } from './NavbarElement';
function Navbar () {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <div onClick={handleClick}>
                    {click ? (<Times />) : (<Bars />)}
                </div>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        My Pokemon Detail
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )    
} 
export default Navbar
