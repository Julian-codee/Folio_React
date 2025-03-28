import React from 'react'
import '../../Styles/FormContact.css'
import { FaPaperPlane } from "react-icons/fa";

export const FormContact = () => {
    return (
        <>

        <div className="containerForm">

            <div className="form">

            <h2 className='titleContact'>Send Me a Message</h2>
            <form action="#">

                <div className="NameMail">

                <label className='LbInfo'>
                   <p> Your Name:</p>
                    <input className='personal' type="text" placeholder='Jull!an' />
                </label>

                <label className='LbInfo'>
                   <p> Your Email:</p>
                    <input className='personal' type="text" placeholder='Jull!an@example.com' />
                </label>

                </div>
        
                <label className='LbInfo'>
                    <p className='PInfo' >Subject:</p>
                    <input className='subject' type="text" placeholder='Project Inquiry' />
                </label>

                <label className='LbInfo'>
                    <p className='PInfo'>Message:</p>
                    <textarea className='message' type="text" placeholder='Hello, I´d like to talk about' />
                </label>

                <div className="SubmitButton">
                    <p className='send'>Send Message </p>
                    <FaPaperPlane />
                </div>
            </form>

            </div>
        </div>


        </>
    )
}

