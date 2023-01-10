import React from "react";
import { Link } from "react-router-dom";
import "./pricingCard.css"

const PricingCard = () =>{
    return(
        <div className="pricing">
            <div className="cardContainer">
                <div className="Card">
                    <h3>Basic</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 100</p>
                    <p> - 3days -</p>
                    <p> - 3pages -</p>
                    <p> - Featured -</p>
                    <p> - Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW 
                    </Link>
                </div>

                <div className="Card">
                    <h3>Premium</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 200</p>
                    <p> - 2days -</p>
                    <p> - 5pages -</p>
                    <p> - Featured -</p>
                    <p> - Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW 
                    </Link>
                </div>

                <div className="Card">
                    <h3>Business</h3>
                    <span className="bar"></span>
                    <p className="btc">$ 300</p>
                    <p> - 5days -</p>
                    <p> - 8pages -</p>
                    <p> - Featured -</p>
                    <p> - Responsive Design -</p>
                    <Link to="/contact" className="btn">
                        PURCHASE NOW 
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default PricingCard;