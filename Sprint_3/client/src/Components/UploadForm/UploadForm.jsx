import React from 'react'

function UploadForm(props) {
  return (
    <form className="upload__form" onSubmit={props.handleUpload}>
      <div className="upload__container">
        <div className="upload__left-container">
          <h2 className="upload__sub-header">VIDEO TUMBNAIL</h2>
          <img src='/Images/Upload-video-preview.jpg' alt="Thumbnail" className="upload__image" />
        </div>
        <div className="upload__right-container">
          <label htmlFor="video-title"><h2 className="upload__sub-header">TITLE YOUR VIDEO</h2></label>
          <input type="text" placeholder="Add a title to your video" name="videoTitle" className="upload__input" />
          <label htmlFor="video-description"><h2 className="upload__sub-header">ADD A VIDEO DESCRIPTION</h2></label>
          <textarea name="videoDescription" cols="30" rows="10" className="upload__description" placeholder="Add a description of your video"></textarea>
        </div>
      </div>
      <div className="upload__buttons-container">
        <button className="upload__publish-button">PUBLISH</button>
        <button className="upload__cancel-button">CANCEL</button>
      </div>
    </form>
  )
}


export default UploadForm;