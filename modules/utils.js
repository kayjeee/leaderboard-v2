// Hard-coded data
const hardcodedData = [
  'name 1',
  'name 2',
  'name 3',
  'name 4',

];

// Fetch data function
export async function fetchData() {
  try {
    // Simulate asynchronous data fetching
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return the hardcoded data
    return hardcodedData;
  } catch (error) {
    return [];
  }
}

// Render list function
export function renderList(data, listElement) {
  // Clear list
  listElement.innerHTML = '';

  // Iterate over data and create list items
  data.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listElement.appendChild(li);
  });
}
