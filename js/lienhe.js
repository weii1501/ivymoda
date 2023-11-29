document.addEventListener("DOMContentLoaded", function () {
  // Select the form and error message div
  const form = document.querySelector("form");
  const errorMessageDiv = document.querySelector(".error_message");

  form.addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Validate the inputs

    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("mail");

    // Regular expressions for validation
    const phoneRegex = /^[0-9]{10,11}$/; // Simple phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    // Flag to track if any validation fails
    let isValid = true;

    // Clear previous error messages
    errorMessageDiv.innerHTML = "";

    // Validate name (Assuming a name must be entered)

    // Validate phone number
    if (!phoneRegex.test(phoneInput.value.trim())) {
      displayError("Lỗi! Số điện thoại không hợp lệ");
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(emailInput.value.trim())) {
      displayError("Lỗi! Email không hợp lệ");
      isValid = false;
    }

    // If all validations pass, you can submit the form
    if (isValid) {
      form.submit();
    }
  });

  // Function to display error message
  function displayError(message) {
    // Create a new element to display the error message
    const errorMessage = document.createElement("div");
    errorMessage.className = "alert alert-danger mt-2";
    errorMessage.textContent = message;
    errorMessageDiv.appendChild(errorMessage);
  }
});
