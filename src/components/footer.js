import React from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt , faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'



import '../../css/style.css'

library.add(fab)


const Footer = ({ siteTitle }) => (
  
    <div className="footer-settings">
        <div className="container">

            <div className="row">

                <div className="footer-box col-md-5">
                    <a href="https://g.page/hiartstudio?share" target="_blank">
                        <FontAwesomeIcon icon = {faMapMarkedAlt} />
                        <span>&nbsp;&nbsp;5 Saville St. Eight Mile Plains QLD 4113</span>
                    </a>
                </div>

                <div className="footer-box col-md-4">
                    <a href="mailto:hiartstudiobrisbane@gmail.com">
                        <FontAwesomeIcon icon = {faEnvelope} />
                        <span>&nbsp;&nbsp;hiartstudiobrisbane@gmail.com</span>
                    </a>
                </div>

                <div className="footer-box col-md-3">
                    <a href="tel:0400123456">
                        <FontAwesomeIcon icon = {faPhoneAlt} />
                        <span>&nbsp;&nbsp;0400 123 456</span>
                    </a>
                    <span className="footer-sns">
                        <a href="https://www.instagram.com/hiartstudiobrisbane/" target="_blank">
                            <FontAwesomeIcon icon = {["fab","instagram"]} size="lg"/>
                        </a>
                        &emsp; 
                        <a href="https://www.facebook.com/hiartstudio" target="_blank">
                            <FontAwesomeIcon icon = {["fab","facebook-square"]} size="lg"/>
                        </a>
                    </span>

                </div>

                <div className="footer-box col-md-6 footer-logo-colour" id="footer-sns-mobile">
                    <span>
                        <a href="https://www.instagram.com/hiartstudiobrisbane/" target="_blank">
                            <FontAwesomeIcon icon = {["fab","instagram"]} size="lg"/>
                            <span>&nbsp;&nbsp;Instagram</span>
                        </a>
                        &emsp; 
                        <a href="https://www.facebook.com/hiartstudio" target="_blank">
                            &nbsp;&nbsp;
                            <FontAwesomeIcon icon = {["fab","facebook-square"]} size="lg"/>
                            <span>&nbsp;&nbsp;Facebook</span>
                        </a>
                    </span>
                </div>


            </div>

            
        </div>
    </div>
)

export default Footer