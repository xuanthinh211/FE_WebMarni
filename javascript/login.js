// login - register
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
  
    function showLoginForm() {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    }
  
    function showRegisterForm() {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
  
    // Initial state: show login form
    showLoginForm();
  
    // Add click event listeners
    loginLink.addEventListener("click", showLoginForm);
    registerLink.addEventListener("click", showRegisterForm);
  });