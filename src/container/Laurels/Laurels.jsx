import React from 'react';

import './Laurels.css';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import { images } from '../../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt={title} />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant">{title}</p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  )
}

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info app__wrapper_info_reverted app__wrapper_laurels">
      <SubHeading title="Award's & Recognition"></SubHeading>
      <h1 className="headtext__cormorant">our laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => {
          return (
            <AwardCard award={award} key={award.title}></AwardCard>
          )
        })}
      </div>

    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
