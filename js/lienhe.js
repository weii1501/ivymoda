document.addEventListener("DOMContentLoaded", function () {
  // Select the form and error message div
  const form = document.querySelector("form");
  const errorMessageDiv = document.querySelector(".error_message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("mail");

    const phoneRegex = /^[0-9]{10,11}$/; // Simple phone number validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

    let isValid = true;

    errorMessageDiv.innerHTML = "";

    if (!phoneRegex.test(phoneInput.value.trim())) {
      displayError("Lỗi! Số điện thoại không hợp lệ");
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(emailInput.value.trim())) {
      displayError("Lỗi! Email không hợp lệ");
      isValid = false;
    }

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
