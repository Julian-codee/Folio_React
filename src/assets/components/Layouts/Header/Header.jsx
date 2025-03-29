import React, { useEffect, useState } from 'react'
import '../../../Styles/header.css'
import logo from '../../../react.svg'
import Sun from '../../../../img/icons/IconSun.png'
import { DropDown } from '../../Ui/DropDown'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

export const Header = () => {
  //Funcion para cambiar el color del header al hacer scroll
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // Detecta cuando estamos en "/" y queremos ir a "About"
  useEffect(() => {
    if (location.hash === "#About") {
      const aboutSection = document.getElementById("mainAboutMe");
      if (aboutSection) {
        setTimeout(() => {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  // Funcion de abrir menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  // Funcion Cerrar
  const closeMenu = () => {
    setMenuOpen(false);
  }

  // Retorno del componente
  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className='logo'>
          <img src={logo} alt="logo" className='logo-img' />
          <h1>Portfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink></li>
            <li><NavLink to="/Skills" className={({ isActive }) => (isActive ? "active" : "")}>Skills</NavLink></li>
            <li><NavLink to="/ContactMe" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li>
          </ul>
        </nav>

        <div className="bg-container">
          <label htmlFor="menu-toggle" className='img-label'>
            <img src={Sun} alt="logo" className='logo-sun' />
          </label>
          <DropDown />

          {/* Hamburger Menu Icon */}
          <div className="hamburger-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Projects</NavLink></li>
          <li><NavLink to="/Skills" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Skills</NavLink></li>
          <li><NavLink to="/ContactMe" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Contact</NavLink></li>
        </ul>

      </div>
    </>
  )
}