import React from "react";
import { Link } from "react-router-dom";
                        
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"

import "./aboutContent.css"

const AboutContent =() =>{
    return(
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>i am a react front-end developer. I create a responsive
                    secure websites for my clients
                </p>

                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack bottom">
                        <img alt="top" src={pic1} className="img"></img>
                    </div>

                    <div className="img-stack top">
                        <img alt="top" src={pic2} className="img"></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutContent;