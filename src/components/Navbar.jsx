import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <img src="https://github.com/RamaiahPadala/portfolio/blob/main/images/logo.png?raw=true" className="logo" alt="Logo" />
            <ul id="sidemenu" className={menuOpen ? "active" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <i className="fas fa-square-xmark" onClick={closeMenu}></i>
            </ul>
            <i className="fas fa-bars" onClick={openMenu}></i>
        </nav>
    );
};

export default Navbar;
