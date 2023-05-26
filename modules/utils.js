// Hard-coded data
const id = '4VTktI4QNjjFNJHbf4k1';
const API = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:${id}/scores`;

export const addmyScore = async (player) => {
  try {
    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player),
    });

    // Check if the API request was successful
    if (!response.ok) {
      throw new Error('Failed to add score');
    }
  } catch (error) {
    // console.error('Error adding score:', error);
    // Handle the error accordingly (e.g., show an error message to the user)
  }
};

export const fetchmyScore = async () => {
  try {
    // Select the list element where the scores will be displayed
    const listtable = document.querySelector('.list');

    // URL for fetching the scores
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/:4VTktI4QNjjFNJHbf4k1/scores';

    // Fetch scores data from the API
    const response = await fetch(url);
    const { result } = await response.json();

    // Iterate through each player's score and display it in a new list item
    result.forEach((gamer) => {
      const newrow = document.createElement('li');
      newrow.textContent = `${gamer.user} : ${gamer.score}`;
      listtable.appendChild(newrow);
    });

    // Return the fetched data
    return result;
  } catch (error) {
    // Handle errors, log the error to the console, and return an empty array
    // console.error('Error fetching scores:', error);
    return [];
  }
};
