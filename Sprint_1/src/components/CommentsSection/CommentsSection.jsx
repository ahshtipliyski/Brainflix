import React from 'react';
import axios from 'axios';
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import CommentsList from '../../components/CommentsList/CommentsList';

//import userIcon from '../../assets/Images/Mohan-muruge.jpg';


class CommentsSection extends React.Component {
  state = {
    comments: []
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({comments: [...this.state.comments, {
        id: Date.now(),
        name: "Mohan Muruge",
        date: Date.now(),
        comment: event.target.comment.value,
        //image: {userIcon},
      }].sort(function(a, b) {
        return b.id - a.id
      })
    })
    event.target.reset();
  }
  componentDidMount() {
    axios.get('/data.json')
    .then(res => this.setState({comments: res.data[0].comments}))
  }
  
  render() {
    return (
      <div className="comment">
        <CommentsForm handleSubmit={this.handleSubmit}/>
        <CommentsList comments={this.state.comments}/>
      </div>
    );
  }
}

export default CommentsSection;
