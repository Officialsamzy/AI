
// document.addEventListener('DOMContentLoaded', function() {
//     var signUpForm = document.getElementById('signUpForm');
//     if (signUpForm) {
//         signUpForm.addEventListener('submit', function(event) {
//             event.preventDefault(); // Prevent default form submission

//             // Here you can add code to handle form data, like sending it to the server
//             // For simplicity, we'll just simulate a successful signup and redirect

//             // Redirect to login page after successful signup
//             window.location.href = 'login.html';
//         });
//     } else {
//         console.error('Signup form not found.');
//     }
// });


document.addEventListener('DOMContentLoaded', function() {
    // Login Form Handling
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            window.location.href = 'welcome.html';
        });
    } else {
        console.error('Login form not found.');
    }
});

    


