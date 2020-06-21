import React from 'react';
import '../../App.scss';
import '../CommentsList/CommentsList.scss'


export default function CommentsList({comments}) {
    return (
        <div className="comment__comments-container">
            {comments.map(input => 
            <div className="comment__each-comment" key={input.id}>
              <div className="comment__image"></div>   {/* try to post with mohan image */}
              <div className="comment__inputs">
                <div className="comment__top-inputs">
                  <h3 className="comment__name">{input.name}</h3>
                  <p className="comment__date">{input.date}</p>
                </div>
                <p className="comment__text">{input.comment}</p>
              </div>
            </div>
            )}    
        </div>
    )
}
