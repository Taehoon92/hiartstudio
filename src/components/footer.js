import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../../css/style.css'

const Footer = ({ siteTitle }) => (
  
    <div className="footer-settings">

        <div className="container">
            
            <div className="row">


                <div className="footer-box col-4">
                    <img src='../../logo_b.png'></img>
                </div>

                <div className="footer-box col-8">
                    <h1 className="footer-box-font">Contact</h1>
                    <p className="footer-box-font">Phone: (+61) 0405 068 004 &emsp; &emsp; Email: hiartstudio@gmail.com</p>
                </div>

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