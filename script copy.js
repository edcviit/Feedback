// Get a reference to the form element
const form = document.getElementById("register");

// Add an event listener for the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form data
  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  fetch("https://regback-production-cc14.up.railway.app/submit", {
    method: "POST",
    body: JSON.stringify(formDataObject),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Registration successful!");
        form.reset(); // Reset the form
      } else {
        alert("Registration failed. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    });
});
