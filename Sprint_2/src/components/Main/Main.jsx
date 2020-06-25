import React from 'react'
import '../Main/Main.scss';
import axios from 'axios';
import Hero from '../Hero/Hero';
import About from '../About/About';
// import CommentsSection from '../CommentsSection/CommentsSection';
// import Aside from '../Aside/Aside';


const API_URL = `https://project-2-api.herokuapp.com`;
const API_KEY = 'cd25c4af-ce42-4a99-87d2-99516501b1b3';
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
    let note = event.target.inputValue.value;

    if (typeof dynamicURL === "undefined") {
      dynamicURL = '1af0jruup5gu'}
    axios 
      .post(`${API_URL}/videos/${dynamicURL}/comments?api_key=${API_KEY}`, {
        "comment" : event.target.inputValue.value,
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
          {/* <CommentsSection /> */}
        </div>
        {/* <Aside/> */}
      </section>
      </>
    )
  }
}

export default Main;
