import React from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../../../Styles/footer.css'

export const Footer = () => {
    
    return (
        <>

<footer className='footer'>
      <h2>Portfolio</h2>
      <div className="social-icons">

      <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

      
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
