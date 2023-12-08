// Get references to the button and modal
const showModalBtn = document.getElementById('showModalBtn');
const portfolioModal = document.getElementById('portfolioModal');

// Function to show the modal
function showModal() {
    portfolioModal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
    portfolioModal.style.display = 'none';
}

// Event listener for the button click
showModalBtn.addEventListener('click', showModal);

// You might also want to close the modal when clicking the close button inside the modal
portfolioModal.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.classList.contains('btn-close')) {
        hideModal();
    }
});

// Initially hide the modal on page load
hideModal();