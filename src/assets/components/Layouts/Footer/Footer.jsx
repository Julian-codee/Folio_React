import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope} from 'react-icons/fa';
import '../../../Styles/footer.css'
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    
    return (
        <>

<footer className='footer'>
      <h2>Portfolio</h2>
      <div className="social-icons">

                <a href="https://www.facebook.com/julianmauricio.cortesocampo.3" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="mailto:mmm808383@gmail.com?subject=Información&body=Hola Julian,%0A%0AQuiero más información sobre:" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
                <a href="https://www.instagram.com/may__b.julian/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/julian-mauricio-cortes-5b49742a0/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="https://github.com/Julian-codee" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

      
      </div>
      <nav className="footer-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </nav>
      <p>© 2025 Jul!an Dev. All rights reserved.</p>
      <p>Designed and built with Jul!an</p>
    </footer>

        </>

    )
}
