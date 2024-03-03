const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

document.getElementById("gifForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput").value;
    const gif = await fetchRandomGif(searchInput);
    displayGif(gif);
});

document.getElementById("deleteAllBtn").addEventListener("click", function() {
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.innerHTML = "";
});

async function fetchRandomGif(category) {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
}

function displayGif(gif) {
    const gifContainer = document.getElementById("gifContainer");
    const img = document.createElement("img");
    img.src = gif.images.original.url;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        gifContainer.removeChild(img.parentElement);
    });
    
    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(deleteBtn);
    
    gifContainer.appendChild(div);
}
