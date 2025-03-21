import React from 'react'
import '../../Styles/Cards.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const Cards = () => {
  return (
  <>

<div class="container">
        <div class="card">
            <div class="image image-dark">

            <a className='btn' href="#" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Demo</a>
            <a className='btn' href="#" target="_blank" rel="noopener noreferrer"><FaGithub /> Git</a>
                 
            </div>
            <div class="content">
                <h3>E-commerce Website</h3>
                <p> A modern e-commerce platform with a sleek UI and seamless checkout experience.</p>
                <div class="tags">
                    <span>React</span>
                    <span>Next.js</span>
                    <span>Tailwind CSS</span>
                    <span>Stripe</span>
                </div>
            </div>
        </div>
        
    </div>
  
  </>
  )
}


