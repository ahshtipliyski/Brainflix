import React from 'react';
import '../Aside/Aside.scss';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

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