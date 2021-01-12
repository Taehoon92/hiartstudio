import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../../css/style.css'

const Footer = ({ siteTitle }) => (
  
    <div className="footer-settings">

        <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
          />
        </head>

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
                <p className="footer-box-connect">Connect with us through SNS</p>
                <p className="footer-box-connect"> <i class="fab fa-instagram fa-lg"></i> &emsp; <i class="fab fa-facebook-square fa-lg"></i>  </p>
                
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