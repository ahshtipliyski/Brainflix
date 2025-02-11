import React from 'react'
import './Main.scss';
import axios from 'axios';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Aside from '../Aside/Aside';


const url = `http://localhost:8080`;
//const API_KEY = '629308dd-9f99-4639-90a7-a06e4fcae511';
const MAIN_VIDEO = '1af0jruup5gu';

class Main extends React.Component {
  state = {
    mainVideo: {
      comments: []
    },
    asideVideos: [],
  }

  //getting information from API for main video and side videos
  initialMount() {
    axios
    .get(`${url}/videos/${MAIN_VIDEO}`) //?api_key=${API_KEY}
    .then(response => {
      this.setState({
        mainVideo: response.data,
      });
    })
    .catch(error => {
      console.log(error)
    }) 
    axios
    .get(`${url}/videos/`) //?api_key=${API_KEY}
    .then(response => {
      this.setState({
        asideVideos: response.data,
      });
    })
    .catch(error => {
      console.log(error)
    })  
  }

  componentDidMount() {
    this.initialMount();
  }

  //dynamic url changing on update
  componentDidUpdate() {      
    let dynamicURL = this.props.match.params.id
    if (typeof this.props.match.params.id === "undefined") {
      dynamicURL = '1af0jruup5gu'}
    axios
    .get(`${url}/videos/${dynamicURL}`)  //?api_key=${API_KEY}
    .then(response => {
      if (this.state.mainVideo.id !== response.data.id) {
        this.setState({
          mainVideo: response.data,
        });
      }   
    })
    .catch(error => {
      console.log(error)
    })   
  }

  //post comment
  commentHandler = (event) => {
    let dynamicURL = this.props.match.params.id
    event.preventDefault();
  
    if (typeof dynamicURL === "undefined") {
      dynamicURL = '1af0jruup5gu'}
    axios 
    .post(`${url}/videos/${dynamicURL}/comments`, {  //?api_key=${API_KEY}
      "comment" : event.target.comment.value,
      "name" : "Brainstation Man",
      "timestamp" : Date.now()
    })
    .then(() => {
      this.initialMount();
    })
    .catch(error => {
      console.log(error)
    })  
    event.target.reset();
  }

  render() {
    return (
      <>
      <Hero 
        poster={this.state.mainVideo.image} 
        videoSample={this.state.mainVideo.video} 
        duration={this.state.mainVideo.duration} />
      <section className="main"> 
        <div className="main__comments">
          <About 
            mainVideoDetails={this.state.mainVideo} 
            commentHandler={this.commentHandler} />
        </div>
        <Aside 
          nextVideos={this.state.asideVideos.filter(data => data.id !== this.state.mainVideo.id)}/>
      </section>
      </>
    )
  }
}

export default Main;
