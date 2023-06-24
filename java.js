document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation (example: check if required fields are filled)
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill out all the required fields.");
      return;
    }

    // Prepare data for submission (example: create an object with the form data)
    var formData = {
      name: name,
      email: email,
      message: message,
    };

    // Perform an AJAX request to submit the form data to the server
    // Replace the URL and method with your own server endpoint
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/submit", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Handle successful form submission (example: display a success message)
        alert("Form submitted successfully!");
      } else {
        // Handle form submission errors (example: display an error message)
        alert("There was an error submitting the form. Please try again.");
      }
    };
    xhr.send(JSON.stringify(formData));
  });
