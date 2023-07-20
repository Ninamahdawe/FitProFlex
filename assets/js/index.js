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
        timer: 2000, // 2 seconds delay before redirecting
      });
  
      // Redirect to home.html (or any other page you prefer) after 2 seconds
      setTimeout(() => {
        window.location.href = 'home.html';
      }, 2000);
    }
  }
  
  // Call the checkLoggedInUser function when the page loads
  window.addEventListener('load', checkLoggedInUser);
  