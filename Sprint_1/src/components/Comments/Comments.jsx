import React from 'react';
import '../../App.scss';
import '../Comments/Comments.scss';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';


function Comments() {
  return (
    <section className="comment">
      <h3 className="comment__counter">3 Comments</h3>
      <div className="comment__form-container">
        <img src={userIcon} alt="User Icon" className="comment__icon"/>
        <form className="comment__input-container">
          <label htmlFor="comment" className="comment__input-label">JOIN THE CONVERSATION</label>
          <textarea className="comment__text-container" name="comment" rows="10" cols="50" placeholder="Add a new comment"></textarea>
          <button type="submit" className="comment__button">COMMENT</button>
        </form>
      </div>
    </section>
  );
}


export default Comments;