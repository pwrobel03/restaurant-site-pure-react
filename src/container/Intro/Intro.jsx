import React, { useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import { meal } from '../../constants';
import './Intro.css';
import { useState } from 'react';

const Intro = () => {
  const [play, setPlay] = useState(false)
  const vidRef = useRef(BsFillPlayFill)

  const handleVideo = () => {
    setPlay((prevPlay) => !prevPlay)

    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play()
    }
  }
  return (
    <div className='app__video'>
      <video
        src={meal}
        type='video/mp4'
        ref={vidRef}
        loop
        controls={false}
        muted
      ></video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {play ? (<BsPauseFill></BsPauseFill>) : <BsFillPlayFill></BsFillPlayFill>}
        </div>
      </div>
    </div>
  );
}

export default Intro;
