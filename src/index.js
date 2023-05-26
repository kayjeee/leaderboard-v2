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

  // Get input values
  const input1Value = document.getElementById('input1').value;
  const input2Value = document.getElementById('input2').value;

  // Perform form submission logic here
  console.log('Input 1:', input1Value);
  console.log('Input 2:', input2Value);
});
