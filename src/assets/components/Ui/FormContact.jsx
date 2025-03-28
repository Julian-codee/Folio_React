import React from 'react'
import '../../Styles/FormContact.css'
import { FaPaperPlane } from "react-icons/fa";

export const FormContact = () => {
    return (
        <>

        <div className="containerForm">

            <h2>Send Me a Message</h2>
            <form action="#">

                <div className="NameMail">

                <label className='LbInfo'>
                    Your Name:
                    <input type="text" placeholder='Jull!an' />
                </label>

                <label className='LbInfo'>
                    Your Email:
                    <input type="text" placeholder='Jull!an@example.com' />
                </label>

                </div>
        
                <label className='LbInfo'>
                    Subject:
                    <input type="text" placeholder='Project Inquiry' />
                </label>

                <label className='LbInfo'>
                    Message:
                    <textarea type="text" placeholder='Jull!an' />
                </label>

                <div className="SubmitButton">
                    <p>Enviar</p>
                    <FaPaperPlane />
                </div>
            </form>
        </div>


        </>
    )
}

