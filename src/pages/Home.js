import React from "react";
import Header from "../component/Header"
import { BanniereAccueil } from "../component/Banniere"
import Annonces from "../component/Annonces";
import Footer from "../component/Footer";

const Home = () => {
    return (
        <div>

         <Header />
         <BanniereAccueil />
         <Annonces />
         <Footer />

        </div>
    )
}

export default Home