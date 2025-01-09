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
