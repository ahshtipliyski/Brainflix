import React from 'react';
import '../../App.scss';
import '../About/About.scss';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

function About() {
  return (
    <section className="about">
      <div className="about__highlight">
        <h1 className="about__header">BMX Rampage: 2018 Hightlights</h1>
        <div className="about__from">
          <h3 className="about__uploaded-by">By Red Cow</h3>
          <p className="about__date">12/18/2018</p>
        </div>
        <div className="about__stats">
          <div className="about__views-container">
            <img className="about__icon" src={viewsIcon} alt="Eye Icon - Views"/>
            <p className="about__views">1,101,023</p>
          </div>
          <div className="about__likes-container">
            <img className="about__icon" src={likesIcon} alt="Heart Icon - Likes"/>
            <p className="about__likes">110,985</p>
          </div>
        </div>
      </div>  
      <div className="about__info">
        <p className="about__text">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
      </div>
    </section>
  );
}


export default About;