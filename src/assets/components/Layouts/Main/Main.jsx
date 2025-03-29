import { useRef, useEffect } from 'react' // Added useEffect for video handling
import '../../../Styles/main.css'
import arrow from '../../../../img/icons/ArrowRight.png'
import arrowDown from '../../../../img/icons/ArrowDown.png'
import Video from '../../../../img/VideoMe2.mp4'
import { MainAboutMe } from './MainAboutMe'
import { Footer } from '../Footer/Footer'

export const Main = () => {
  /**
   * Create a function to scroll to a component
   */
  // Create a reference for the MainAboutMe component
  const aboutMeRef = useRef(null)
  // Reference for the video element
  const videoRef = useRef(null)
  
  // Function to scroll to the component
  const scrollToAboutMe = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  
  // Handle video autoplay for all devices including mobile
  useEffect(() => {
    const videoElement = videoRef.current
    
    if (videoElement) {
      // Function to attempt playback
      const attemptPlay = () => {
        videoElement.play().catch(error => {
          // If autoplay fails, try again when user interacts with the page
          console.log("Autoplay prevented:", error)
          
          // Try to play on first user interaction with the page
          const playOnInteraction = () => {
            videoElement.play()
            // Remove event listeners after successful play
            document.removeEventListener('touchstart', playOnInteraction)
            document.removeEventListener('click', playOnInteraction)
          }
          
          document.addEventListener('touchstart', playOnInteraction, { once: true })
          document.addEventListener('click', playOnInteraction, { once: true })
        })
      }
      
      // Try autoplay immediately
      attemptPlay()
      
      // Also try when page becomes visible (if it was loaded in background tab)
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          attemptPlay()
        }
      })
      
      // Clean up event listeners when component unmounts
      return () => {
        document.removeEventListener('visibilitychange', attemptPlay)
      }
    }
  }, [])
  
  return (
    <>
      <main className="mainContent">
        <video
          ref={videoRef}
          src={Video}
          width="450px"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="logoPersonal-Video"
        >
          {/* Video formats supported by all browsers */}
          <source src={Video} type="video/mp4" />
          <source src={Video} type="video/webm" />
          <source src={Video} type="video/ogg" />
          Your browser does not support the video
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
      {/* Reference for scrolling */}
      <div ref={aboutMeRef}>
        <MainAboutMe />
      </div>
      <Footer />
    </>
  );
}