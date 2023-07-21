// JavaScript for logout functionality
function handleLogout() {
    const logoutButton = document.querySelector('.navbar-menu li a[href="login.html"]');

    logoutButton.addEventListener('click', function(event) {
      event.preventDefault();

      // Clear login status from local storage
      localStorage.removeItem('isLoggedIn');

      // Show SweetAlert popup indicating successful logout
      Swal.fire({
        icon: 'info',
        title: 'Logout Successful',
        text: 'You have been logged out.',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.href = 'login.html'; // Redirect to the login page after logout
      });
    });
  }

  // Check if the user is logged in on page load
  window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
      // User is not logged in, show an alert and redirect to login.html
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'You need to be logged in to access the Fit Tracker page.',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.href = 'login.html';
      });
    }
  });

  // Call the functions after DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    handleLogout();
  });