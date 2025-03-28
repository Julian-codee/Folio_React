import React from 'react'
import '../../../Styles/ContactMe.css'
import { ContactInformation } from '../../Ui/ContactInformation'
import {Footer} from '../Footer/Footer'

export const ContactMe = () => {
  return (
<>

<div className="main-Contact">
        <div className="ContainerContact">
          <h2 className="Contact-title">Get in Touch</h2>
          <hr className="divider" />
          <p className="description">
          Have a project in mind or want to collaborate? Feel free to reach out to me.
          </p>
        </div>

        <div className="containerContact2">

        <ContactInformation />

        </div>

        </div>

        <Footer />

</>
  )
}

