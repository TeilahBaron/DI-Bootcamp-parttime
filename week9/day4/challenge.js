document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Retrieve data from the inputs
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    // Create a JavaScript object with the form data
    var formData = {
        firstName: firstName,
        lastName: lastName
    };

    // Convert the JavaScript object to a JSON string
    var jsonData = JSON.stringify(formData);

    // Append the JSON string to the DOM
    var outputDiv = document.getElementById('output');
    outputDiv.textContent = jsonData;
});
