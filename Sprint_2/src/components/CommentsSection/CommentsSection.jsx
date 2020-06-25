// import React from 'react'
// import '../CommentsForm/CommentsForm.scss';
// import '../CommentsList/CommentsList.scss';
// import { v4 as uuidv4 } from 'uuid';


// function CommentsSection(props) {
//   return (
//     <div className="comment">
//     <h3 className="comment__counter">{props.mainVideoDetails.comments.length} Comments</h3>
//     <div className="comment__form-container">
//       <form className="comment__form" onSubmit={props.commentHandler}>
//         <img src="/Images/Mohan-muruge.jpg" alt="User Icon" className="comment__icon"/>  
//         <label htmlFor="comment" className="comment__input-label">JOIN THE CONVERSATION</label>
//         <textarea 
//           className="comment__text-container" 
//           name="comment" 
//           rows="10" 
//           cols="50" 
//           placeholder="Write comment here"></textarea>
//         <button type="submit" className="comment__button">COMMENT</button>
//       </form>
//     </div>

//     <div>{
//       props.mainVideoDetails.comments.map((commentArray)=>
//       <CommentsList key={uuidv4()} name={commentArray.name} timestamp={commentArray.timestamp} comment={commentArray.comment} />
//       ).reverse()
//     }
//     </div>
//   </div>
//   )
// }
// export default CommentsSection;
