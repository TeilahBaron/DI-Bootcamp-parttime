document.addEventListener('DOMContentLoaded', function () {
    const emojiDiv = document.getElementById('emoji');
    const guessForm = document.getElementById('guessForm');
    const guessInput = document.getElementById('guessInput');
    const resultDiv = document.getElementById('result');

    // Fetches a random emoji from the server
    function fetchRandomEmoji() {
        fetch('http://localhost:3000/emoji')
            .then(response => response.json())
            .then(data => {
                emojiDiv.textContent = data.emoji;
                guessInput.value = '';
                resultDiv.textContent = '';
                const options = data.options.map(option => `<option value="${option}">${option}</option>`).join('');
                guessInput.innerHTML = `<datalist id="options">${options}</datalist>`;
            })
            .catch(error => console.error('Error fetching emoji:', error));
    }

    // Handles form submission
    guessForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const guess = guessInput.value;
        fetch('http://localhost:3000/guess', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ guess })
        })
        .then(response => response.json())
        .then(data => {
            resultDiv.textContent = data.message;
            fetchRandomEmoji();
        })
        .catch(error => console.error('Error submitting guess:', error));
    });

    // Fetches a random emoji when the page loads
    fetchRandomEmoji();
});
