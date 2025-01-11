const toggleLost = document.getElementById('toggle-lost');
const toggleFound = document.getElementById('toggle-found');
const lostFormContainer = document.getElementById('lost-form-container');
const foundFormContainer = document.getElementById('found-form-container');

// Toggle to Lost Form
toggleLost.addEventListener('click', () => {
    toggleLost.classList.add('active');
    toggleFound.classList.remove('active');
    lostFormContainer.style.display = 'block';
    foundFormContainer.style.display = 'none';
});

// Toggle to Found Form
toggleFound.addEventListener('click', () => {
    toggleFound.classList.add('active');
    toggleLost.classList.remove('active');
    foundFormContainer.style.display = 'block';
    lostFormContainer.style.display = 'none';
});

/*for date*/
flatpickr("#calendar", {
    dateFormat: "Y-m-d",
    // Disable past dates
});