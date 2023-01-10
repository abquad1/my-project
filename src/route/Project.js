import React from "react";

import Navbar from "../components/navbar";

import Footer from "../components/footer";
import HeroImg2 from "../components/heroImg2";
import PricingCard from "../components/pricingCard";
import Work from "../components/work";

const Project = () => {
    return (
        <div>
            <Navbar />
            <HeroImg2 heading="PROJECTS."  
            text="some of my most recent works" />
            <Work />
            <PricingCard />
            <Footer />
            
        </div>
        
    )
}

export default Project; 