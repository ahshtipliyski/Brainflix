import React from 'react'
//import userIcon from '../../../public/Images/Mohan-muruge.jpg';
import '../CommentsList/CommentsList.scss';


export default function CommentsForm({handleSubmit}) {
    return (
      <section>
        <h3 className="comment__counter">3 Comments</h3>
        <div className="comment__form-container">
          <form onSubmit={handleSubmit}>
            <img src="" alt="User Icon" className="comment__icon"/>    {/* src was => {userIcon} */}
            <label htmlFor="comment" className="comment__input-label">JOIN THE CONVERSATION</label>
              <textarea 
              className="comment__text-container" 
              name="comment" 
              rows="10" 
              cols="50" 
              placeholder="Add a new comment"></textarea>
            <button type="submit" className="comment__button">COMMENT</button>
          </form>
      </div>
    </section>
    )
}
