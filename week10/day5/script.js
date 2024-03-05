document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById("fetch-character");
    const characterInfo = document.getElementById("character-info");
    const loadingMessage = document.getElementById("loading");

    fetchButton.addEventListener("click", function() {
        loadingMessage.style.display = "block";
        characterInfo.innerHTML = '';

        // Fetch data from the SWAPI
        fetch("https://www.swapi.tech/api/people/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Randomly select a character from the API
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const character = data.results[randomIndex];

                // Fetch additional details of the character
                return fetch(character.url);
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(characterDetails => {
                loadingMessage.style.display = "none";
                displayCharacterInfo(characterDetails.result.properties, characterInfo);
            })
            .catch(error => {
                loadingMessage.style.display = "none";
                characterInfo.innerHTML = '<p>Oh No! That person isn\'t available!</p>';
            });
    });

    function displayCharacterInfo(character, container) {
        const name = character.name;
        const height = character.height;
        const gender = character.gender;
        const birthYear = character.birth_year;
        const homeWorldUrl = character.homeworld;

        // Fetch homeworld details
        fetch(homeWorldUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(homeWorldDetails => {
                const homeWorld = homeWorldDetails.result.properties.name;

                // Display character information
                container.innerHTML = `
                    <h2>${name}</h2>
                    <p>Height: ${height}</p>
                    <p>Gender: ${gender}</p>
                    <p>Birth Year: ${birthYear}</p>
                    <p>Home World: ${homeWorld}</p>
                `;
            })
            .catch(error => {
                container.innerHTML = '<p>Failed to fetch character details. Please try again.</p>';
            });
    }
});
