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
        timer: 1500, // 1.5 seconds delay before redirecting
      });
  
      // Redirect to home.html (or any other page you prefer) after 2 seconds
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 1500);
    }
  }
  
  // Call the checkLoggedInUser function on page load
  document.addEventListener('DOMContentLoaded', checkLoggedInUser);
  

document.getElementById('loginForm').addEventListener('submit', function(event) {
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

    if (password.trim() === '') {
      passwordError.textContent = 'Password is required.';
      return;
    }

    // Check if the username and password match the stored credentials in local storage
    const users = JSON.parse(localStorage.getItem('users')) || {};
    const storedPassword = users[username];

    if (storedPassword === password) {
      // Successful login, set login status in local storage
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect to home.html
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'You have successfully logged in.',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.href = 'home.html';
      });
    } else {
      // Invalid credentials, show an error message
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
        text: 'Invalid credentials. Please try again.',
        confirmButtonText: 'OK',
      });
    }
  });