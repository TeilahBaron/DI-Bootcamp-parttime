document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const formData = new FormData(this);

    // Send form data with POST method using fetch API
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Handle response here if needed
        console.log(response);
    })
    .catch(error => {
        // Handle error here if needed
        console.error('Error:', error);
    });

    // Clear the form fields if needed
    this.reset();
});
