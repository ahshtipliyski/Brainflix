import React from 'react'
import '../Main/Main.scss';
import axios from 'axios';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Aside from '../Aside/Aside';


const API_URL = `https://project-2-api.herokuapp.com`;
const API_KEY = '629308dd-9f99-4639-90a7-a06e4fcae511';
const MAIN_VIDEO = '1af0jruup5gu'

class Main extends React.Component {
  state = {
    mainVideo: {
      comments: []
    },
    aside: [],
  }

  firstMount = () => {
    axios
    .get(`${API_URL}/videos/${MAIN_VIDEO}?api_key=${API_KEY}`)
    .then(response => {
      this.setState({
        mainVideo: response.data,
      });
    })
    axios
    .get(`${API_URL}/videos/?api_key=${API_KEY}`)
    .then(response => {
      this.setState({
        aside: response.data
      });
    })  
  }

  componentDidMount() {
    this.firstMount();
  }

  commentHandler = (event) => {
    let dynamicURL = this.props.match.params.id
    event.preventDefault();
    let note = event.target.comment.value;

    if (typeof dynamicURL === "undefined") {
      dynamicURL = '1af0jruup5gu'}
    axios 
      .post(`${API_URL}/videos/${dynamicURL}/comments?api_key=${API_KEY}`, {
        "comment" : event.target.comment.value,
        "name" : "Brainstation Man"
      })
      .then(() => {
        this.firstMount();
      }) 
      event.target.reset();
  }

  render() {
    return (
      <>
      <Hero poster={this.state.mainVideo.image} videoSample={this.state.mainVideo.video} duration={this.state.mainVideo.duration} />
      <section className="main"> 
        <div className="main__comments">
          <About mainVideoDetails={this.state.mainVideo} commentHandler={this.commentHandler} />
        </div>
        <Aside/>
      </section>
      </>
    )
  }
}

export default Main;
