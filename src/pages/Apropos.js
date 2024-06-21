import React from 'react';
import Header from "../component/Header"
import { BanniereApropos } from "../component/Banniere"
import Footer from "../component/Footer";
import AproposContent from "../component/AproposContent";

const Apropos = () => {
    return (
        <div>
         <Header />
         <BanniereApropos />
         <AproposContent />
         <Footer />

        </div>
    );
};

export default Apropos;

