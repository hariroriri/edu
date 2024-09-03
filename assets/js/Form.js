document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Simulate form submission
    setTimeout(function() {
      // Show success message with tick mark
      document.getElementById('messageIcon').innerHTML = '&#10004;'; // Tick mark
      document.getElementById('messageText').innerHTML = 'Your response was received successfully';
      
      // Style the message
      const formMessages = document.getElementById('formMessages');
      formMessages.style.color = 'green';
      formMessages.style.fontWeight = 'bold';
      formMessages.style.display = 'block'; // Ensure it's visible
      
      // Optionally hide the message after a few seconds
      setTimeout(function() {
        formMessages.style.display = 'none';
      }, 5000); // Hides the message after 5 seconds
    }, 500);
  });