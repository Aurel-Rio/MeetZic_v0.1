const toggleFormLink = document.querySelector('#toggle-form-link');
const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');

toggleFormLink.addEventListener('click', function() {
  if (loginForm.style.display === 'none') {
    loginForm.style.display = '';
    signupForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = '';
  }
});