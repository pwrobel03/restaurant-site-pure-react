import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center app__wrapper section__padding" id='menu'>
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you platte"></SubHeading>
        <h1 className="headtext__cormorant">Today's special</h1>
      </div>
      <div className='app__specialMenu-handler'>

        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine flex__center">
            <p className='app__specialMenu_menu_heading'>wine & beer</p>
            <div className="app__specialMenu_menu_items">
              {data.wines.map((wine, index) => {
                return (
                  <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags}></MenuItem>
                )
              })}
            </div>
          </div>
        </div>


        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine flex__center">
            <p className='app__specialMenu_menu_heading'>Cocktails</p>
            <div className="app__specialMenu_menu_items">
              {data.cocktails.map((cocktail, index) => {
                return (
                  <MenuItem key={cocktail.title + index} price={cocktail.price} title={cocktail.title} tags={cocktail.tags}></MenuItem>
                )
              })}
            </div>
          </div>
        </div>

      </div>
      <button className='custom__button'>View More</button>
    </div>
  );
}

export default SpecialMenu;
