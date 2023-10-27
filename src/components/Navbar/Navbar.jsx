import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false)


  return (
    <nav className='app_navbar'>
      <div className="app_navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <li className="p__opensans" href="#home">Home</li>
        <li className="p__opensans" href="#about">About</li>
        <li className="p__opensans" href="#menu">Menu</li>
        <li className="p__opensans" href="#awards">Awards</li>
        <li className="p__opensans" href="#contact">Contact</li>
      </ul>
      <div className="app_navbar-login">
        <a href="#login" className='p__opensans'>Log in / Register</a>
        <div></div>
        <a href="/" className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app_navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
            <ul className='app_navbar-smallscreen_links'>
              <li className="p__opensans" href="#home">Home</li>
              <li className="p__opensans" href="#about">About</li>
              <li className="p__opensans" href="#menu">Menu</li>
              <li className="p__opensans" href="#awards">Awards</li>
              <li className="p__opensans" href="#contact">Contact</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
