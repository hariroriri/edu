document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  setTimeout(function() {
    // Display the modal
    const modal = document.getElementById('responseModal');
    modal.style.display = 'block';

    // Reset the form
    document.getElementById('contactForm').reset();
  }, 500);
});

// Close the modal when clicking 'OK'
document.getElementById('closeModal').addEventListener('click', function() {
  const modal = document.getElementById('responseModal');
  modal.style.display = 'none';
});
