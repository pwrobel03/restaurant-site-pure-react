import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="#about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_letter" srcset="" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="spoon" style={{ transform: "scaleX(-1)" }} className='spoon__img' />
        <p className="p__opensans">Maecenas molestie nisl eu tincidunt consequat. Ut auctor sed justo vitae imperdiet. Sed at imperdiet nulla. Donec pretium a erat sit amet bibendum. Maecenas ac rutrum lectus, vitae interdum ex. Nunc iaculis, purus ut pharetra iaculis, sapien metus efficitur erat, sed sollicitudin magna nibh sed arcu. Vivamus sit amet semper justo. Sed condimentum diam a faucibus pellentesque.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className="p__opensans">Maecenas molestie nisl eu tincidunt consequat. Ut auctor sed justo vitae imperdiet. Sed at imperdiet nulla. Donec pretium a erat sit amet bibendum. Maecenas ac rutrum lectus, vitae interdum ex. Nunc iaculis, purus ut pharetra iaculis, sapien metus efficitur erat, sed sollicitudin magna nibh sed arcu. Vivamus sit amet semper justo. Sed condimentum diam a faucibus pellentesque.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
