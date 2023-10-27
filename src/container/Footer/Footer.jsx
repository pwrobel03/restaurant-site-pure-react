import React from 'react';
import { FooterOverlay, Newsletter } from "../../components"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay></FooterOverlay>
    <Newsletter></Newsletter>

    <div className="app__footer_links">
      <div className="app__footer_links-contact">
        <h1 className="app__footer-headtext">contact us</h1>
        <p className="p__opensans">1904 Chicago Avenue, Fresno, California, USA </p>
        <p className="p__opensans">Telephone Number: 559-532-6527</p>
        <p className="p__opensans">Mobile Number: 209-219-5279</p>
      </div>
      <div className="app__footer_links-logo">
        <img src={images.gericht} alt="gericht logo" />
        <p className="p__opensans"><q>The best way to find yourself is to lose yourself in the service of others.</q></p>
        <img src={images.spoon} alt="spoon" className='app__footer_links-spoon' />
        <div className='app__footer_links-logo-social'>
          <FiFacebook></FiFacebook>
          <FiTwitter></FiTwitter>
          <FiInstagram></FiInstagram>
        </div>
      </div>

      <div className="app__footer_links-work">

      </div>
    </div>
    <div className="footer_copyrights">
      <p className="p__opensans">
        2023 gericht. all rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
