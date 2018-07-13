import data from './utils/data.js';
import Cards from './components/cards.js';
import { gradient } from './utils/gradient.js';

data
  .get()
  .then(Response => Response.json())
  .then(json => render(Cards(json)));

const render = html => {
  const container = document.querySelector('.layout');
  container.innerHTML = '<div class="container">' + html.join('') + '</div>';
  
  // set a gradient for each child
  container.querySelectorAll('.card').forEach(child => setGradient(child));
};

const setGradient = element => element.style.background = gradient();