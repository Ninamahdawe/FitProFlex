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