import React from 'react';
import { FooterOverlay, Newsletter } from "../../components"
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay></FooterOverlay>
    <Newsletter></Newsletter>
  </div>
);

export default Footer;
