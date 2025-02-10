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


document.getElementById("found-item-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const foundItem = {
        name: document.getElementById("found-item-name").value,
        category: document.getElementById("found-category").value,
        description: document.getElementById("found-description").value,
        location: document.getElementById("found-location").value,
        date: document.getElementById("calendar").value,
        image: document.getElementById("found-image").files[0]
            ? URL.createObjectURL(document.getElementById("found-image").files[0])
            : "https://via.placeholder.com/150", // Placeholder image if none is uploaded
    };

    // Store data in localStorage
    let foundItems = JSON.parse(localStorage.getItem("foundItems")) || [];
    foundItems.push(foundItem);
    localStorage.setItem("foundItems", JSON.stringify(foundItems));

    // Redirect to items.html
    window.location.href = "items.html";
});
