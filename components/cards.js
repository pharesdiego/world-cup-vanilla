import Card from './card.js';

const generateCards = data => data.map(obj => Card(obj));

const Cards = data => generateCards(data.rounds);

export default Cards;