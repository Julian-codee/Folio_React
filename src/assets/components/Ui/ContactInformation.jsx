import React from 'react'
import '../../Styles/Contactinformation.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactInformation = () => {
    return (
        <>

            <div className='ContactInformation'>
                <div className="info">

                    <h2>Contact Information</h2>

                    <p>Feel free to reach out to me through any of these channels. I'm always open to discussing new projects,
                        creative ideas, or opportunities.</p>

                </div>

                <div className="infoPins">

                     {/*Pin correo*/}

                    <div className="pin">
                        <div className="pinicon">
                            <FaEnvelope />
                        </div>
                        <div className="infoicon">
                            <p className='SocialInfo'>Email:</p>
                            <p>mmm808383@gmail.com</p>
                        </div>
                    </div>

                     {/*Pin phone*/}

                    <div className="pin">
                        <div className="pinicon">
                            <FaPhone />
                        </div>
                        <div className="infoicon">
                            <p className='SocialInfo'>Phone:</p>
                            <p>+57 300 846 5233</p>
                        </div>
                    </div>


                     {/*Pin location*/}

                     <div className="pin">
                        <div className="pinicon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="infoicon">
                            <p className='SocialInfo'>Location:</p>
                            <p>Montenegro, Quindio - Colombia</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

