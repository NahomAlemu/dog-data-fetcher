// Fetches and displays details for a specific dog breed
async function fetchBreedDetails(breedId) {
    try {
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${breedId}`);
        const data = await response.json();
        const breed = data.data.attributes;
        const detailsDiv = document.getElementById('breedDetails');
        detailsDiv.innerHTML = `<h2>${breed.name}</h2><p>${breed.description}</p>`;
    } catch (error) {
        console.error('Error fetching breed details:', error);
    }
}

// Fetches and displays a list of dog breeds
async function fetchBreeds() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/breeds');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const breeds = data.data;
        const breedList = document.getElementById('breedList');
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed.attributes.name;
            li.addEventListener('click', () => fetchBreedDetails(breed.id));
            breedList.appendChild(li);
        });
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Fetches and displays a list of random dog facts
async function fetchDogFacts() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/facts');
        const data = await response.json();
        const facts = data.data;
        const factsList = document.getElementById('dogFacts');
        facts.forEach(fact => {
            const li = document.createElement('li');
            li.textContent = fact.attributes.body;
            factsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching dog facts:', error);
    }
}

// Fetches and displays a list of dog groups
async function fetchDogGroups() {
    try {
        const response = await fetch('https://dogapi.dog/api/v2/groups');
        const data = await response.json();
        const groups = data.data;
        const groupsList = document.getElementById('dogGroups');
        groups.forEach(group => {
            const li = document.createElement('li');
            li.textContent = group.attributes.name;
            groupsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching dog groups:', error);
    }
}

// Initialize the fetching of breeds, facts, and groups when the page loads
fetchBreeds();
fetchDogFacts();
fetchDogGroups();
