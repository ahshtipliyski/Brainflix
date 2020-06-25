import React from 'react';
import '../../App.scss';
import '../CommentsList/CommentsList.scss'

const timeConverter = (timeStampFromApi) => {
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

class CommentsList extends React.Component {
  render () {
    let {name, timestamp, comment} = this.props
    return (
        <div className="comment__comments-container">
            <div className="comment__each-comment">               
              <div className="comment__image"></div> 
              <div className="comment__inputs">
                <div className="comment__top-inputs">
                  <h3 className="comment__name">{name}</h3>
                  <p className="comment__date">{timeConverter(timestamp)}</p>
                </div>
                <p className="comment__text">{comment}</p>
              </div>
            </div>  
        </div>
    )
  }
}


export default CommentsList;