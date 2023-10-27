import React from 'react';
// import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

import { SubHeading } from '../../components';
import './Gallery.css';
import Carousel from '../../components/Carousel/Carousel';


const Gallery = () => {
  // const scrollRef = React.useRef(null)

  // const scroll = (direction) => {
  //   const current = scrollRef;
  //   if (direction === "left") {
  //     current.scrollLeft -= 300;
  //   } else {
  //     current.scrollLeft += 300;
  //   }
  // }

  return (
    <div className='app__gallery flex__center section__padding'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">photo gallery</h1>
        <p className="p__opensans"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
        <button type="button" className='custom__button'>Visit Us</button>
      </div>

      <Carousel></Carousel>

      {/* <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className='gallery__arrow-icon'
            onClick={() => scroll("left")}>
          </BsArrowLeftShort>
          <BsArrowRightShort
            className='gallery__arrow-icon'
            onClick={() => scroll("right")}>
          </BsArrowRightShort>
        </div> */}
    </div>
  );
}

export default Gallery;
