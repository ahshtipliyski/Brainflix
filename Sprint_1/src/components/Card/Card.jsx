import React from 'react';
import '../Card/Card.scss';

function Card ({ image, title, channel }){

  return (
    <div className="card__container">
      <img className="card__image" src={image}/>
      <div className="card__text-container">
        <h4 className="card__title">{title}</h4>
        <p className="card__channel">{channel}</p>
      </div>
    </div>
  )
}



export default Card;