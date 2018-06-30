import Card from './card.js';

const Cards = data => data.rounds.map(round => Card(round));

export default Cards;