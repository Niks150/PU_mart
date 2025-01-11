// Get references to the form elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.querySelector('button');
const noteElement = document.getElementById('note');

// Simulate a simple user data (In real apps, you'd validate against a database)
const users = [
  { username: 'sandeep', password: '12345678' }
];

// Function to validate the form
function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if username and password are provided
  if (!username || !password) {
    alert('Please fill in both username and password.');
    return;
  }

  // Check if username and password match any user data (this would normally be checked against a database)
  const user = users.find(user => user.username === username);

  if (user && user.password === password) {
    alert('Login successful!');
    // Redirect to a new page or show the logged-in state (for example)
    // window.location.href = '/dashboard'; // Example redirect
  } else {
    alert('Invalid username or password.');
  }
}

// Attach the event listener to the login button
loginButton.addEventListener('click', validateLogin);

/*rendering the page */
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

