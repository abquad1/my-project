import React from "react";
import Navbar from "../components/navbar";
import HeroImage from "../components/heroImage";
import Footer from "../components/footer";
import Work from "../components/work";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroImage />
            <Work />
            <Footer />
        </div>
    )
}

export default Home;