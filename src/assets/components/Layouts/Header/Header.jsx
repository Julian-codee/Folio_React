import React, {useEffect, useState} from 'react'
import '../../../Styles/header.css'
import logo from '../../../react.svg'
import Sun from '../../../../img/icons/IconSun.png'
import { DropDown } from '../../Ui/DropDown'


export const Header = () => {

    //Funcion para cambiar el color del header al hacer scroll

    const [scrolled, setScrolled] = useState(false);

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

    //Retorno del Componente

  return (

    <>

    <header className={`header ${scrolled ? 'scrolled' : ''}`}>

        <div className='logo'>

            <img src={logo} alt="logo" className='logo-img' />
            <h1>Portfolio</h1>

        </div>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div className="bg-container">

            <label htmlFor="menu-toggle" className='img-label'>
            <img src={Sun} alt="logo" className='logo-sun' />
            </label>

            <DropDown />
        </div>

       


    </header>

</>
    
  )
}
