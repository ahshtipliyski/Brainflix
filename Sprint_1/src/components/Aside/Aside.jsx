import React from 'react';
import axios from 'axios';
import '../Aside/Aside.scss'
import Card from '../Card/Card'


class Aside extends React.Component {
  state = {
    cards: []
  }

  componentDidMount() {
    axios.get('/data.json')
    .then(res =>  {
      this.setState({cards: res.data})
    })
  }

  render() {
    return (
      <div className="card">
        <h3 className="card__header">NEXT VIDEO</h3>
        { this.state.cards.map(card => 
          <Card key={card.id} image={card.image} title={card.title} channel={card.channel}/>
        )}
      </div>
    )
  }
}


export default Aside;


// { this.state.cards.map(card => 
//   <div key={card.id}>
//     <img className="card__image" src={card.image}/>
//   </div>
// )}