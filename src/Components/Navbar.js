import React from 'react';
import logo from '../logo.svg'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="site-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <ul className="nav-list">
                    <li className="nav-item"><a href="/" className="nav-link">&lt;Home &frasl;&gt;</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">&lt;Projects &frasl;&gt;</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">&lt;OpenSource &frasl;&gt;</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">&lt;ContactMe &frasl;&gt;</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
