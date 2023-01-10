import "./heroImage.css";

import React from "react";
import flcimage from "../assets/flcimage.jpeg";
import { Link } from "react-router-dom";

const heroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={flcimage} alt="introImg"/>
            </div>

            <div className="content">
                <p> I'M A FREELANCER.</p>
                <h1>React Developer.</h1>

                <div>
                    <Link to="/project" className="btn">
                        projects
                    </Link>

                    <Link to="/contact" className="btn btn-light">
                        contact
                    </Link>
                </div>
            </div>
        </div>
    )
};


export default heroImage;


