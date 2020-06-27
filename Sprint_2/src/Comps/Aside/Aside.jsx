import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from '../Card/Card';
import './Aside.scss';
import { Link } from 'react-router-dom';


function Aside(props) {

  return (
    <div className="card">
      <h3 className="card__header">NEXT VIDEO</h3>
        {
          props.nextVideos.map((sideArray) =>
          <Link to={`/${sideArray.id}`} key={uuidv4()} className="card__anchor"> 
            <Card title={sideArray.title} channel={sideArray.channel} image={sideArray.image}/>
          </Link>
          )
        }
        
    </div>
  )
}



export default Aside;