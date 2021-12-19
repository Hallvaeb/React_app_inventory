import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    // Hvorfor kan ikke denne legges i App.css? 
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <ul className='nav-links'>
                <Link style={navStyle} to="/">
                    <h1>Home</h1>
                </Link>
                <Link style={navStyle} to="/ErikBjorgen">
                    <li>Erik Bjørgen</li>
                </Link>
                <Link style={navStyle} to="/Photographs">
                    <li>Photographs</li>
                </Link>
                <Link style={navStyle} to="/About">
                    <li>About</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav
//<h3 className='logo'>Home</h3>
