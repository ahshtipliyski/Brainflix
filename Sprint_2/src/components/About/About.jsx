import React from 'react';
import '../../App.scss';
import '../About/About.scss';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

const dynamicTimestamp = (timeStampFromApi) => {
  let seconds = Math.floor((new Date() - timeStampFromApi) / 1000);
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

function About (props) {

  return (
    <div className="about">
      <div className="about__highlight">
        <h1 className="about__header">{props.mainVideoDetails.title}</h1>
        <div className="about__from">
          <h3 className="about__uploaded-by">By {props.mainVideoDetails.channel}</h3>
          <p className="about__date">{dynamicTimestamp(props.mainVideoDetails.timestamp)}</p>
        </div>
        <div className="about__stats">
          <div className="about__views-container">
            <img className="about__icon" src={viewsIcon} alt="Eye Icon - Views"/>
            <p className="about__views">{props.mainVideoDetails.views}</p>
          </div>
          <div className="about__likes-container">
            <img className="about__icon" src={likesIcon} alt="Heart Icon - Likes"/>
            <p className="about__likes">{props.mainVideoDetails.likes}</p>
          </div>
        </div>
      </div>  
      <div className="about__info">
        <p className="about__text">{props.mainVideoDetails.description}</p>
      </div>
    </div>
  );
  
}


export default About;