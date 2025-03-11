import React from 'react'
import Sun from '../../../img/icons/IconSun.png'
import '../../Styles/DropDown.css'

export const DropDown = () => {
  return (

    <>
    <div className='menu-container'>
        <label htmlFor="menu-toggle" className='icon-label'>
            <img src={Sun} alt="logo" className='logo-sun' />
        </label>
        <input type="checkbox"  id="menu-toggle" />

        <div className="dropdown-menu">
            <ul>
                <li><a href="#1">Light</a></li>
                <li><a href="#2">Dark</a></li>
            </ul>
        </div>
    </div>

    </>
  )
}
