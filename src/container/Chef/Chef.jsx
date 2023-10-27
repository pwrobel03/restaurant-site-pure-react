import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef word"></SubHeading>
      <h1 className="headtext__cormorant" style={{ textAlign: "left" }}>What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Morbi porttitor quam et ante euismod laoreet. Vestibulum eleifend lacus et dolor vulputate, in accumsan eros porttitor. Sed aliquam libero ut arcu interdum laoreet. Nulla commodo est et consectetur varius. Ut viverra bibendum leo, ut vehicula lorem consequat vitae.</p>
        </div>
        <div className="app__chef-sign">
          <p className='p__opensans'>Kevin Luo</p>
          <p className='p__opensans'>chef's & founder</p>
          <img src={images.sign} alt="chef's sign" />
        </div>
      </div>

    </div>
  </div>
);

export default Chef;
