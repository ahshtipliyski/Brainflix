import React from "react";
import '../Hero/Hero.scss';
import play from '../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';

function Hero(props) {

    return (
      <section className="hero">
        <div className="hero__background">
          <video // controls
            src={props.videoSample} 
            type="video/mp4" 
            poster={props.poster}
            className="hero__video">
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="hero__controls">
            <img src={play} className="hero__play" alt="Play Button"/>
            <div className="hero__video-process">
              <div className="hero__progress-bar"></div>
              <span className="hero__progress-time">0:00 / {props.duration}</span>
            </div>
            <div className="hero__settings"><img src={fullscreen} alt="Video fullscreen button"/><img src={volume} alt="Volume control button"/></div>
          </div>
        </div>
      </section>
    );
}


export default Hero;
