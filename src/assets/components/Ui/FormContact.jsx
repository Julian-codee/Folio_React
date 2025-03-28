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
                    Your Name:
                    <input className='personal' type="text" placeholder='Jull!an' />
                </label>

                <label className='LbInfo'>
                    Your Email:
                    <input className='personal' type="text" placeholder='Jull!an@example.com' />
                </label>

                </div>
        
                <label className='LbInfo'>
                    Subject:
                    <input className='subject' type="text" placeholder='Project Inquiry' />
                </label>

                <label className='LbInfo'>
                    Message:
                    <textarea className='message' type="text" placeholder='Jull!an' />
                </label>

                <div className="SubmitButton">
                    <p>Enviar</p>
                    <FaPaperPlane />
                </div>
            </form>

            </div>
        </div>


        </>
    )
}

