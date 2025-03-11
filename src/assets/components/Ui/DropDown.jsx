import React from 'react'
import '../../Styles/DropDown.css'

export const DropDown = () => {
  return (

    <>

    <input type="checkbox" id='menu-toggle' />

    <div className="dropdown-menu">
        <ul>
            <li><a href="opcion1">light</a></li>
            <li><a href="opcion1">dark</a></li>
        </ul>
    </div>
  
    </>
  )
}

