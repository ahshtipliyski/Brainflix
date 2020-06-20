import React from "react";
import '../Hero/Hero.scss';
import mainVideo from '../../assets/Video/BrainStation-Sample-Video.mp4';
import posterVideo from '../../assets/Images/video-list-0.jpg';
// import videoPlay from '../../assets/Icons/SVG/Icon-play.svg';
// import videoFull from '../../assets/Icons/SVG/Icon-fullscreen.svg';
// import videoSound from '../../assets/Icons/SVG/Icon-volume.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__background"></div>
      <video //controls
        src={mainVideo} 
        type="video/mp4" 
        poster={posterVideo}
        className="hero__video">
        Sorry, your browser doesn't support embedded videos.
      </video>
      {/* <div className='hero__controls'>
        <img src={videoPlay} id='play' alt="videoPlay"/>
        <div className='videoProcess'>
           <div id='progressbar'></div>
           <span>0:00 / 0:42</span>
        </div>
        <div id='side'><img src={videoFull} alt="videoFull"/><img src={videoSound} alt="videoSound"/></div>
      </div> */}
    </section>
  );
}
export default Hero;
