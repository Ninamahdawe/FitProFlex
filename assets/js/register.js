// Function to check if the user is already logged in
function checkLoggedInUser() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    if (isLoggedIn === 'true') {
      // User is already logged in, show a SweetAlert notification
      Swal.fire({
        icon: 'info',
        title: 'Already Logged In!',
        text: 'You are already logged in. Redirecting to Home Page...',
        showConfirmButton: false,
        timer: 1500, // 2 seconds delay before redirecting
      });
  
      // Redirect to home.html (or any other page you prefer) after 2 seconds
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1500);
    }
  }
  
  // Call the checkLoggedInUser function on page load
  document.addEventListener('DOMContentLoaded', checkLoggedInUser);

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate the form fields
    if (username.trim() === '') {
        usernameError.textContent = 'Username is required.';
        return;
    }

    if (username.trim().length < 6) {
        usernameError.textContent = 'Username must be at least 6 characters long.';
        return;
    }

    if (password.trim() === '') {
        passwordError.textContent = 'Password is required.';
        return;
    }

    if (password.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // Check if the username already exists in local storage
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users.hasOwnProperty(username)) {
        usernameError.textContent = 'Username already exists. Please choose a different one.';
        return;
    }

    // Register the user and store credentials in local storage
    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));

    // Show SweetAlert popup indicating successful registration
    Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'You have successfully registered.',
        confirmButtonText: 'OK',
    }).then(() => {
        window.location.href = 'login.html'; // Redirect to the login page after successful registration
    });
});