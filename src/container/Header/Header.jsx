import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="#home">
    <div className="app__wrapper_info app__wrapper_info_reverted">
      <SubHeading title="Chase the new flavour"></SubHeading>
      <h1 className="app__header" style={{ textAlign: "right" }}>The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', textAlign: "right" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis purus in accumsan consectetur. Sed ultrices enim a rutrum gravida. Nulla rutrum bibendum libero, in iaculis leo luctus in. Morbi finibus tellus in sem consequat tristique. Integer varius diam arcu, at condimentum urna condimentum eget. Nullam eget volutpat augue, ut mollis dolor. Mauris mauris tellus, interdum at dignissim pellentesque, dapibus quis massa. Pellentesque ullamcorper ut massa sit amet convallis.</p>
      <button type="button" className='custom__button'>Explore menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
