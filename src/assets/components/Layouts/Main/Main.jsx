import React, { useEffect } from 'react'
import '../../../Styles/main.css'
import logoPersonal from '../../../../img/ME2.png'
import arrow from '../../../../img/icons/ArrowRight.png'
import arrowDown from '../../../../img/icons/ArrowDown.png'


export const Main = () => {
  return (
    <>
    
    <main className='mainContent'>

      <img src={logoPersonal} alt="logo" className='logoPersonal-img' />

        <h2 className='title'>Hello, I´m 
          <span> Jul!an Dev</span>
        </h2>
        <p className='SubTitle'>FullStack Developer & UI/UX Designer</p>

        <div className="button-log">
         <a href="#" className='btn-Primary'>View My Work <img src={arrow} alt="Arrow" className='ArrowRight' /></a>
         <a href="#" className='btn-secondary'>Learn More <img src={arrowDown} alt="Arrow" className='ArrowDown' /></a>
        </div>

    </main>
    </>
  )
}