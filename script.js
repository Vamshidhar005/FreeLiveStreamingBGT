// Select all prank buttons and the hidden message
const buttons = document.querySelectorAll(".prank-button");
const message = document.getElementById("hiddenMessage");
const buttonContainer = document.getElementById("buttonContainer");

// Add click event to each button to reveal the hidden message and hide the buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    message.classList.remove("hidden"); // Show the message
    buttonContainer.style.display = "none"; // Hide the buttons
  });
});