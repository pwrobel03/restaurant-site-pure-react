import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter"></SubHeading>
      <h1 className="headtext__cormorant">subscribe to our newsletter</h1>
      <p className="p__opensans">And never miss latest updates</p>
    </div>

    <div className="app__newsletter-input">
      <input type="email" placeholder='Enter your email address' />
      <button className="custom__button">subscribe</button>
    </div>
  </div>
);

export default Newsletter;
