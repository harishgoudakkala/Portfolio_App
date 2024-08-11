import { HashLink as Link } from 'react-router-hash-link';
import React, { useState, useEffect } from "react";
import "../styles/navbar.css";

const Navbar = () => {
    const [logo, setLogo] = useState('AHG');
    const [isHovered, setIsHovered] = useState(false);
    const [navBar, setNavbar] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const logoHover = () => {
        setLogo('Akkala Harish Goud');
        setIsHovered(true);
    };

    const mouseLeave = () => {
        setLogo('AHG');
        setIsHovered(false);
    };

    const changeBackground = () => {
        setNavbar(window.scrollY > 150);
    };

    const scrollTo = (el) => {
        window.scrollTo({
            top: el.offsetTop - 100, // Adjust the offset as needed
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

    return (
        <div className={navBar||menuOpen ? "nav_body active" : "nav_body" }>
            <div>
                <h2 className='logo' 
                    onMouseEnter={logoHover} 
                    onMouseLeave={mouseLeave}
                >
                    &lt;<span className={isHovered ? 'full' : 'abbr'}>{logo}</span>/&gt;
                </h2>
            </div>
            <button className='menu_toggle' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✖' : '☰'}
            </button>
            <div className={menuOpen ? 'nav_container active' : 'nav_container'}>
                <div className='nav_item'><Link to='#Home' scroll={(el) => scrollTo(el)} onClick={() => setMenuOpen(!menuOpen)}>Home</Link></div>
                <div className='nav_item'><Link to='#Aboutme' scroll={(el) => scrollTo(el)} onClick={() => setMenuOpen(!menuOpen)}>My&nbsp;Journey</Link></div>
                <div className='nav_item'><Link to='#Projects' scroll={(el) =>scrollTo(el)} onClick={() => setMenuOpen(!menuOpen)}>Projects</Link></div>
                <div className='nav_item'><Link to='#ContactMe' scroll={(el) => scrollTo(el)} onClick={() => setMenuOpen(!menuOpen)}>Contact&nbsp;Me</Link></div>
            </div>
        </div>
    );
};

export default Navbar;
