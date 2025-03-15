import React, {useEffect, useState} from 'react'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import '../../../Styles/footer.css'

export const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <>

<footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <h2>Portfolio</h2>
      <div className="social-icons">

      
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
