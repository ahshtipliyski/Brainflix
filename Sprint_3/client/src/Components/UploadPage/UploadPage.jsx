import React from 'react';
import './UploadPage.scss';
import axios from 'axios';
import UploadForm from '../UploadForm/UploadForm';
import { v4 as uuidv4 } from 'uuid';

const url = `http://localhost:8080`;


class UploadPage extends React.Component {

  handleUpload = (event) => {
    event.preventDefault();
    axios.post(`${url}/videos`, {
      "id": uuidv4(),
      "title": event.target.videoTitle.value,
      "channel":"New channel",
      "image":"http://localhost:8080/Upload-video-preview.jpg",
      "description": event.target.videoDescription.value,
      "views":"5,000",
      "likes":"1,000",
      "duration":"10:00",
      "video":"https://project-2-api.herokuapp.com/stream",
      "timestamp": Date.now(),
      "comments":[
          {"name":"Mike Lyons","comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.","id":"1ab6d9f6-da38-456e-9b09-ab0acd9ce818","likes":0,"timestamp":1545162149000},
          {"name":"Gary Wong","comment":"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!","id":"cc6f173d-9e9d-4501-918d-bc11f15a8e14","likes":0,"timestamp":1544595784046},
          {"name":"Theodore Duncan","comment":"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!","id":"993f950f-df99-48e7-bd1e-d95003cc98f1","likes":0,"timestamp":1542262984046}
      ]
    })
    event.target.reset();
  }

  render() {
    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <UploadForm handleUpload={this.handleUpload} />
      </div>
    )
  }
}
export default UploadPage;
