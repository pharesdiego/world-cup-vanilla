import Card from './card.js';

/**
 * @description This functions generate a card for each round of the world cup.
 * @param {array} data - an array of objects containing the world cup data.
 * @returns {array} an array of cards.
 */
const Cards = data => data.rounds.map(round => Card(round));

export default Cards;