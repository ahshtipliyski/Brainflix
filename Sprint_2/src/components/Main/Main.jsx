import React from 'react'
import '../Main/Main.scss';
import axios from 'axios';
import About from '../About/About';
import CommentsSection from '../CommentsSection/CommentsSection';
import Aside from '../Aside/Aside';
import Hero from '../Hero/Hero';

const API_URL = `https://project-2-api.herokuapp.com`;
const API_KEY = '?api_key=8881ea85-d4f6-4b36-ba29-f14305db0fc9';
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
    .get(`${API_URL}/videos/${MAIN_VIDEO}${API_KEY}`)
    .then(response => {
      this.setState({
        mainVideo: response.data,
      });
    })
    axios
      .get(`${API_URL}/videos${API_KEY}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          videoList: response.data
        });
      })  
  }

  componentDidMount() {
    this.firstMount();
  }

  commentHandler = (e) => {
    let dynamicURL = this.props.match.params.id
    e.preventDefault();
    let note = e.target.inputValue.value;

    if (typeof dynamicURL === "undefined") {
      dynamicURL = '1af0jruup5gu'}
    axios 
      .post(`${API_URL}/videos/${dynamicURL}/comments${API_KEY}`, {
        "comment" : e.target.inputValue.value,
        "name" : "Rio"
      })
      .then(() => {
        this.firstMount();
      }) 
      e.target.reset();
  }

  render() {
    return (
      <>
      <Hero poster={this.state.mainVideo.image} videoSample={this.state.mainVideo.video} duration={this.state.mainVideo.duration} />
      <section className="main"> 
        <div className="main__comments">
          <About mainVideoDetails={this.state.mainVideo} commentHandler={this.commentHandler} />
          <CommentsSection />
        </div>
        <Aside/>
      </section>
      </>
    )
  }
}

export default Main;
