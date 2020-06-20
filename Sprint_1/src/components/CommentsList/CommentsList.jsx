import React from 'react';
import '../../App.scss';


export default function CommentsList({comments}) {
    return (
        <div>
            {comments.map(input => 
            <div key={input.id}>
              <div className="comment__image"></div>   {/* try to post with mohan image */}
              <h3>{input.name}</h3>
              <p>{input.date}</p>
              <p>{input.comment}</p>
            </div>
            )}    
        </div>
    )
}
