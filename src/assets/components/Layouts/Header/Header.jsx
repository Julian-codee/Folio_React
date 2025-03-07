import React from 'react'
import '../../../Styles/header.css'
import logo from '../../../react.svg'

export const Header = () => {
  return (

    <>

    <header className='header'>

        <div className='logo'>

            <img src={logo} alt="logo" className='logo-img' />
            <h1>My App</h1>

        </div>

        <nav>
            <ul>
                <li><a href="#">Hoome</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">History</a></li>

            </ul>
        </nav>


    </header>

</>
    
  )
}
