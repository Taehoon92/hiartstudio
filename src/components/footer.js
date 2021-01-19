import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

import '../../css/style.css'

library.add(fab)


const Footer = ({ siteTitle }) => (
  
    <div className="footer-settings">
        <div className="container">        
            <div className="row">

                <div className="footer-box col-4">
                    <img src='../../logo_b.png'></img>
                </div>

                <div className="footer-box col-8">
                    <h1 className="footer-box-font">Contact</h1>
                    <p className="footer-box-font">Phone: 0405 068 004 &emsp; &emsp; Email: hiartstudio@gmail.com</p>
                </div>

            </div>
            <div>
                <p className="footer-box-connect">Connect with us through SNS</p>
                <p className="footer-box-connect">
                    <a href="https://www.instagram.com" target="_blank">
                        <FontAwesomeIcon icon = {["fab","instagram"]} />
                    </a>
                    &emsp; 
                    <a href="https://www.facebook.com/hiartstudio" target="_blank">
                        <FontAwesomeIcon icon = {["fab","facebook-square"]}/>
                    </a>
                </p>
            </div>
            <div>
                <hr className="copyright"></hr>
            </div>
            <div className="copyright">
                <p className="copyright">© 2021 Copyright: Hi Art Studio</p>
            </div>
        </div>
    </div>
)

export default Footer