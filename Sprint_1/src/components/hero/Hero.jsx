import React from "react";
import '../Hero/Hero.scss';
import axios from 'axios';
import play from '../../assets/Icons/SVG/Icon-play.svg';
import fullscreen from '../../assets/Icons/SVG/Icon-fullscreen.svg';
import volume from '../../assets/Icons/SVG/Icon-volume.svg';

class Hero extends React.Component {
  state = {
    input: ''
  }

  componentDidMount() {
    axios.get('/data.json')
    .then(res => this.setState({input: res.data[0]}))
  }

  render() {
    return (
      <section className="hero">
        <div className="hero__background">
          <video // controls
            src={this.state.input.video} 
            type="video/mp4" 
            poster={this.state.input.image}
            className="hero__video">
            Sorry, your browser doesn't support embedded videos.
          </video>
          <div className="hero__controls">
            <img src={play} className="hero__play" alt="Play Button"/>
            <div className="hero__video-process">
              <div className="hero__progress-bar"></div>
            <span className="hero__progress-time">0:00 / 0:42</span>
            </div>
            <div className="hero__settings"><img src={fullscreen} alt="Video fullscreen button"/><img src={volume} alt="Volume control button"/></div>
          </div>
        </div>
      </section>
    );
  }
}


export default Hero;
