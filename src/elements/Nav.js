import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    // Hvorfor kan ikke denne legges i App.css? 
    const navStyle = {
        color: 'white'
    }
    return (
        <nav>
            <h3 className='logo'>Home</h3>
            <ul className='nav-links'>
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
