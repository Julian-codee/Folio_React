import { useRef } from 'react'//Importamos useRef para hacer scroll
import '../../../Styles/main.css'
import arrow from '../../../../img/icons/ArrowRight.png'
import arrowDown from '../../../../img/icons/ArrowDown.png'
import Video from '../../../../img/VideoMe2.mp4'
import { MainAboutMe } from './MainAboutMe'
import { Footer } from '../Footer/Footer'



export const Main = () => {

  /***
   *Crearemos una funcion para hacer scroll hacia un componente */

  // Creamos una referencia para el componente MainAboutMe
  const aboutMeRef = useRef(null)

  // Función para hacer scroll hasta el componente
  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <main className="mainContent">
        <video
          src={Video}
          width="450px"
          autoPlay
          loop
          muted
          playsInline
          className="logoPersonal-Video"
        >
          {/*Tipos de video soportados para todos los navegadores*/}
          <source src={Video} type="video/mp4" />
          <source src={Video} type="video/webm" />
          <source src={Video} type="video/ogg" />
          tu navegador no soporta el video
        </video>

        <h2 className="title">
          Hello, I´m
          <span> Jul!an Dev</span>
        </h2>
        <p className="SubTitle">FullStack Developer & UI/UX Designer</p>

        <div className="button-log">
          <a href="#" className="btn-Primary">
            View My Work <img src={arrow} alt="Arrow" className="ArrowRight" />
          </a>
          <a onClick={scrollToAboutMe} className="btn-secondary">
            Learn More <img src={arrowDown} alt="Arrow" className="ArrowDown" />
          </a>
        </div>
      </main>

      {/*Referencia para el desplazamiento*/}
      <div ref={aboutMeRef}>
        <MainAboutMe />
      </div>

      <Footer />
    </>
  );
}