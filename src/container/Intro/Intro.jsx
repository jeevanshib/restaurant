import React from 'react';
import { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';

import './Intro.css';

const Intro = () => {
  const [videoPlay, setVideoPlay]=useState(false);
  const vidRef = React.useRef();
  const handleVideo = ()=>{
    setVideoPlay((prevVideoPlay)=> !prevVideoPlay);
    if(videoPlay){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
    // setVideoPlay(true)
    // setVideoPlay(false)
  }
  return(
  <div className='app__video'>
    <video src={meal} type='video/mp4'
    ref={vidRef}
    loop
    controls={false}
    muted />
    <div className='app__video-overlay flex__center'>
      <div 
      className='app__video-overlay_circle flex__center'
      onClick={handleVideo}
      >
        {videoPlay 
        ?<BsPauseFill color='#fff' fontSize={30}/>
        :<BsFillPlayFill color='#fff' fontSize={30}/>}


      </div>

    </div>
  </div>
  
);
  }
export default Intro;
