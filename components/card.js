const Card = ({ name, matches }) => {
  if(matches.length === 0) return null; // if there is not any match return null

  return (
    div('card',
      div('header',
        p(name),
        p(matches[0].date)
      ),
      matches.map(match => (
        div('match',
          div('team',
            p(match.team1.name, match.score1 > match.score2)
          ),
          div('result', 
            p(null === match.score1 ? '' : match.score1),
            p('-'),
            p(null === match.score2 ? '' : match.score2)
          ),
          div('team',
            p(match.team2.name, match.score2 > match.score1)
          )
        )
      )).join('') // because .map returns an array and we need to .join every node in this array
    )
  )
}

/**
 * Structure explanation:
 * div.card
 *  div.header
 *    p Matchday 1
 *    p 2018-06-14
 *  div.match
 *    div.team
 *      p Russia
 *    div.result
 *      p 5
 *      p -
 *      p 0
 *    div.team
 *      p Saudi Arabia
 */

const div = (className = '', ...nodes) => `<div class='${className}'>${ nodes.join('') }</div>`;

const p = (text, isWinner = '') => `<p class='${isWinner ? 'bold' : ''}'>${ text }</p>`;

export default Card;