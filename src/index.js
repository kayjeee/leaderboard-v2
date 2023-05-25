import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Your remaining JavaScript code goes her

// Import modules
import { fetchmyScore, addmyScore } from '../modules/utils.js';
// Import modules

// Get DOM element
const form = document.querySelector('form');
const name = document.querySelector('.name');
const score = document.querySelector('.score');

// event for refersh button
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  window.location.reload();
});

fetchmyScore();
// Form submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameValue = name.value.trim();
  const scoreValue = score.value.trim();

  if (nameValue !== '' && scoreValue !== '') {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    addmyScore(data);

    name.value = '';
    score.value = '';
  }
});
