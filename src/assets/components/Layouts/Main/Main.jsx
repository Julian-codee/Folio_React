import React from 'react'
import '../../../Styles/main.css'
import logoPersonal from '../../../react.svg'
import Video from '../../../../img/MeVideo.mp4'



export const Main = () => {
  return (
    <>
    
    <main className='mainContent'>

      <video src={Video} width='450px' autoPlay loop muted playsInline></video>
      

        <h2 className='title'>Hello, I´m 
          <span> Jul!an Dev</span>
        </h2>
        <p className='subTitle'>FullStack Developer & UI/UX Designer</p>

        <div className="button-log">
         <a href="#" className='btn-Primary'>View My Work</a>
         <a href="#" className='btn-secondary'>Learn More</a>
        </div>

    </main>
    </>
  )
}
