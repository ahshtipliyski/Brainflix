import React from 'react';
import '../Aside/Aside.scss'
import Card from '../Card/Card'


function Aside(props) {

  return (
    <div className="card">
      <h3 className="card__header">NEXT VIDEO</h3>
      { this.state.cards.map(card => 
        <Card key={card.id} image={card.image} title={card.title} channel={card.channel}/>
      )}
    </div>
  )
}



export default Aside;