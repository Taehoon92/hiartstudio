import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt , faEnvelope } from '@fortawesome/free-solid-svg-icons'



import '../../css/style.css'

library.add(fab)


const Footer = ({ siteTitle }) => (
  
    <div className="footer-settings">
        <div className="container">

            <div className="row">

                <div className="footer-box col-md-2">

                    <FontAwesomeIcon icon = {faPhoneAlt} />
                    <span>&nbsp;&nbsp;0400 123 456</span>



                </div>

                <div className="footer-box col-md-8">
                    <FontAwesomeIcon icon = {faEnvelope} />
                    <span>&nbsp;&nbsp;hiartstudiobrisbane@gmail.com</span>

                </div>


                <div className="footer-box icon-box col-2">
                    <div>
                        <p>
                            <a href="https://www.instagram.com/hiartstudiobrisbane/" target="_blank">
                                <FontAwesomeIcon icon = {["fab","instagram"]} size="lg"/>
                            </a>
                            &emsp; 
                            <a href="https://www.facebook.com/hiartstudio" target="_blank">
                                <FontAwesomeIcon icon = {["fab","facebook-square"]} size="lg"/>
                            </a>
                        </p>
                    </div>
                </div>

            </div>

            
        </div>
    </div>
)

export default Footer