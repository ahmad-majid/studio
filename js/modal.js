document.addEventListener("DOMContentLoaded", function () {
  // Add the CSS styles dynamically
  const style = document.createElement("style");
  style.textContent = `
    .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      background-color: rgba(0, 0, 0, 0.4); /* Black with opacity */
    }

    .modal-content {
      background-color: #fefefe;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      padding: 20px;
      border: 1px solid #888;
      width: 400px; /* Fixed width */
      max-width: 80%; /* Maximum width */
      text-align: center;
      color: #333; /* Text color */
    }

    .close-button {
      color: #aaa;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 28px;
      font-weight: bold;
    }

    .close-button:hover,
    .close-button:focus {
      color: #000; /* Hover color */
      text-decoration: none;
      cursor: pointer;
    }

    .modal-image {
      display: block;
      margin: 0 auto 20px; /* Center image and add space below */
    }

    .contact-number {
      font-size: 24px; /* Larger font size for contact number */
      color: #007bff; /* Cool blue color */
    }

  `;
  document.head.append(style);

  // Get the modal and button elements
  const modal = document.getElementById("contact-modal");
  const btn = document.querySelector(".button_colored");
  const span = document.querySelector(".close-button");

  // Check if the elements exist before adding event listeners
  if (btn && modal && span) {
    // When the user clicks the button, open the modal and log to the console
    btn.onclick = function () {
      console.log("Hire me button clicked");
      modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  } else {
    console.error(
      "Modal elements not found. Ensure your HTML contains the required elements."
    );
  }
});
