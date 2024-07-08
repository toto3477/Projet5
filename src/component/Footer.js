import React from 'react';
import Logoblack from "../assets/images/Kasablack.png";
import "../assets/style/footer.scss";

const Footer = () => {
    return (
        <div className='footer'>
            <img src= {Logoblack} />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;