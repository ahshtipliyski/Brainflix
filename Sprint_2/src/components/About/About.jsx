import React from 'react';
import CommentsList from '../CommentsList/CommentsList'
import '../../App.scss';
import '../About/About.scss';
import '../CommentsForm/CommentsForm.scss'
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
    <>
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



      <h3 className="comment__counter">{props.mainVideoDetails.comments.length} Comments</h3>
      <div className="comment__form-container">
        <form className="comment__form" onSubmit={props.commentHandler}>
          <img src="/Images/Mohan-muruge.jpg" alt="User Icon" className="comment__icon"/>  
          <label htmlFor="comment" className="comment__input-label">JOIN THE CONVERSATION</label>
          <textarea 
            className="comment__text-container" 
            name="comment" 
            rows="10" 
            cols="50" 
            placeholder="Write comment here"></textarea>
          <button type="submit" className="comment__button">COMMENT</button>
        </form>
      </div>
  

    <div>{
            props.mainVideoDetails.comments.map((commentArray, index)=>
            <CommentsList 
              key={index}
              name={commentArray.name}
              timestamp={commentArray.timestamp}
              comment={commentArray.comment}

            />
            ).reverse()
          }
          </div>

    </>
  );
  
}


export default About;