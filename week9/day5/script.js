// Array of objects containing information about robots
const robots = [
    { name: "Leanne Graham", image: "robot1.jpg", description: "Sincere@april.biz", additionalInfo: "Bret" },
    { name: "Robot 2", image: "robot2.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 2" },
    { name: "Robot 3", image: "robot3.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 3" },
    { name: "Robot 4", image: "robot4.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 4" },
    { name: "Robot 5", image: "robot5.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 5" },
    { name: "Robot 6", image: "robot6.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 6" },
    { name: "Robot 7", image: "robot7.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 7" },
    { name: "Robot 8", image: "robot8.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 8" },
    { name: "Robot 9", image: "robot9.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 9" },
    { name: "Robot 10", image: "robot10.jpg", description: "Description of Robot 2", additionalInfo: "Additional information about Robot 10" },
    // Add more robot objects as needed
];

// Function to create a card for each robot
function createRobotCard(robot) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const image = document.createElement("img");
    image.src = robot.image;
    image.alt = robot.name;

    const heading = document.createElement("h2");
    heading.textContent = robot.name;

    const description = document.createElement("p");
    description.textContent = robot.description;

    const additionalInfo = document.createElement("p");
    additionalInfo.textContent = robot.additionalInfo;

    cardDiv.appendChild(image);
    cardDiv.appendChild(heading);
    cardDiv.appendChild(description);
    cardDiv.appendChild(additionalInfo);

    return cardDiv;
}

// Function to display all robot cards
function displayRobotCards() {
    const container = document.getElementById("robotCardsContainer");
    container.innerHTML = ''; // Clear previous cards
    robots.forEach(robot => {
        const card = createRobotCard(robot);
        container.appendChild(card);
    });
}

// Function to filter robot cards based on search input
function filterRobots() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchInput));
    const container = document.getElementById("robotCardsContainer");
    container.innerHTML = ''; // Clear previous cards
    filteredRobots.forEach(robot => {
        const card = createRobotCard(robot);
        container.appendChild(card);
    });
}

// Display all robot cards when the page loads
window.onload = displayRobotCards;

// Add event listener to the search input to filter robot cards on input change
document.getElementById("searchInput").addEventListener("input", filterRobots);
