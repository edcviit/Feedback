// Get references to form elements
const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const branchSelect = document.querySelector('select[name="branch"]');
const emailInput = document.querySelector('input[name="email"]');
const prnInput = document.querySelector('input[name="prn"]');
const phoneInput = document.querySelector('input[name="phone"]');
const feedbackInput = document.querySelector('input[name="feedback"]');

function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    branch: branchSelect.value,
    email: emailInput.value,
    prn: prnInput.value,
    phone: phoneInput.value,
    feedback: feedbackInput.value,
  };

  fetch("https://regback-production-cc14.up.railway.app/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank You");
        form.reset();
      } else {
        // Handle errors, e.g., show an error message
        alert("Registration failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
}

// Attach the submit event handler to the form
form.addEventListener("submit", handleSubmit);
