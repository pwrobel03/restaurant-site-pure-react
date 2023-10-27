import React from 'react';
import images from "../../constants/images";
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id="contact">
    <div className="app__wrapper_info app__wrapper_info_reverted">
      <SubHeading title="contact"></SubHeading>
      <h1 className="headtext__cormorant">find us</h1>
      <div className="app__wrapper-content" style={{ textAlign: "right" }}>
        <p className="p__opensans">Sed faucibus est tortor, semper elementum.</p>
        <p className="p__cormorant" style={{ color: "var(--color-golden)", marginTop: "1rem" }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <button className='custom__button'>visit us</button>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
