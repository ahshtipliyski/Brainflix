import React, {useState} from 'react'
import '../CommentsForm/CommentsForm.scss';


function CommentsForm({handleSubmit}) {

  const [count, setCount] = useState(3);
  const increment = () => {
    setCount(count +1);
  };

  return (
  <section>
    <h3 className="comment__counter">{count} Comments</h3>
    <div className="comment__form-container">
      <form className="comment__form" onSubmit={handleSubmit}>
        <img src="/Images/Mohan-muruge.jpg" alt="User Icon" className="comment__icon"/>    {/* src was =>  */}
        <label htmlFor="comment" className="comment__input-label">JOIN THE CONVERSATION</label>
        <textarea 
          className="comment__text-container" 
          name="comment" 
          rows="10" 
          cols="50" 
          placeholder="Write comment here"></textarea>
        <button type="submit" className="comment__button" onClick={increment}>COMMENT</button>
      </form>
    </div>
  </section>
  )
}

export default CommentsForm;