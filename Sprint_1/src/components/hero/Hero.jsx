import React from "react";
import '../Hero/Hero.scss';
import axios from 'axios';

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
        </div>
      </section>
    );
  }
}


export default Hero;
