document.addEventListener('DOMContentLoaded', function() {
    // Function to decode JWT token
    function decodeJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    // Function to check if the token is expired
    function isTokenExpired(decodedToken) {
        const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
        return decodedToken.exp < currentTime; // Check if token is expired
    }

    // Retrieve token from localStorage
    const token = localStorage.getItem('token');
    
    if (!token) {
        // Redirect to login page if no token is found
        window.location.href = "login.html";
        return;
    }

    const decodedToken = decodeJwt(token);
    // console.log(decodedToken)
    if (isTokenExpired(decodedToken)) {
        // Redirect to login page if token is expired
        window.location.href = "login.html";
        return;
    }

    // Update HTML dynamically based on decoded token
    const greetingElement = document.getElementById('greeting');
    if (decodedToken && decodedToken.data && decodedToken.data.name) {
        greetingElement.textContent = 'Hi, ' + decodedToken.data.name;
    } else {
        greetingElement.textContent = 'Hi there'; // Fallback greeting if no name is found
    }
});
