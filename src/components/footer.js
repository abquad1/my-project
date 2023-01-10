import "./footer.css"

import React from "react";

import { FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">

                <div className="left">
                    <div className="location">
                        <FaHome className="icon"/>
                        <div>
                            <p>123 Housing Society</p>
                            <p>Bangladesh</p>
                        </div>
                    </div>

                    <div className="phone">
                    <h4>    <FaPhone className="icon"/>
                            1-2323-343-23 </h4>
                    </div>

                    <div className="email">
                    <h4>    <FaMailBulk className="icon"/>
                            info@gmail.com </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About the company</h4>
                    <p>This is abdulrahmon Quadri. CEO & Founder 
                        of Tech@etc. i enjoy discussing new projects 
                        and design challenges</p>

                        <div socials>
                            < FaFacebook className="icon" />
                            < FaTwitter className="icon"/>
                            < FaLinkedin className="icon"/>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;