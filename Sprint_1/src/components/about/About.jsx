import React from 'react';
import '../../App.scss';
import '../About/About.scss';
import axios from 'axios';
import viewsIcon from '../../assets/Icons/SVG/Icon-views.svg';
import likesIcon from '../../assets/Icons/SVG/Icon-likes.svg';

class About extends React.Component {
  state = {
    about: ''
  }

  componentDidMount() {
    axios.get('/data.json')
    .then(res => this.setState({about: res.data[0]}))
  }
  
  render() {
    return (
      <div className="about">
        <div className="about__highlight">
          <h1 className="about__header">{this.state.about.title}</h1>
          <div className="about__from">
            <h3 className="about__uploaded-by">{this.state.about.channel}</h3>
            <p className="about__date">{this.state.about.timestamp}</p>
          </div>
          <div className="about__stats">
            <div className="about__views-container">
              <img className="about__icon" src={viewsIcon} alt="Eye Icon - Views"/>
              <p className="about__views">{this.state.about.views}</p>
            </div>
            <div className="about__likes-container">
              <img className="about__icon" src={likesIcon} alt="Heart Icon - Likes"/>
              <p className="about__likes">{this.state.about.likes}</p>
            </div>
          </div>
        </div>  
        <div className="about__info">
          <p className="about__text">{this.state.about.description}</p>
        </div>
      </div>
    );
  }
}


export default About;