import Card from './card.js';

const getUsefulRounds = rounds => rounds.map(({ name, matches }) => ({
  name,
  matches: getUsefulDataFromMatches(matches)
}));

const getUsefulDataFromMatches = matches => matches.map(match => ({
  date: match.date,
  score1: match.score1,
  score2: match.score2,
  team1: match.team1,
  team2: match.team2
}));

const generateCards = data => data.map(obj => Card(obj));

const Cards = data => generateCards(getUsefulRounds(data.rounds));

export default Cards;