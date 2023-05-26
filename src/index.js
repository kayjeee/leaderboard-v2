import './style.css';
// Import modules
import { fetchData, renderList } from '../modules/utils.js';
// Import modules

// Get DOM elements
const btn = document.getElementById('btn');
const list = document.getElementById('list');
const form = document.getElementById('form');

// Button click event listener
// Button click event listener
btn.addEventListener('click', async () => {
  // Fetch data
  const data = await fetchData();

  // Render list
  renderList(data, list);
});

// Form submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
