import React from 'react'
import '../../../Styles/header.css'
import logo from '../../../react.svg'
import Sun from '../../../../img/icons/IconSun.png'

export const Header = () => {
  return (

    <>

    <header className='header'>

        <div className='logo'>

            <img src={logo} alt="logo" className='logo-img' />
            <h1>Portfolio</h1>

        </div>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>


            </ul>
        </nav>

        <div className="bg-container">
            <img src={Sun} alt="logo" className='logo-sun' />
        </div>


    </header>

</>
    
  )
}
