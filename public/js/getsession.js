document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and decode multiple tokens from localStorage
    const tokens = []; // Array to store decoded tokens

    // Example tokens stored in localStorage (replace with your actual implementation)
    const token = localStorage.getItem('token'); // Replace 'token1' with your actual key
    // const token2 = localStorage.getItem('token2'); // Replace 'token2' with your actual key

    if (token) {
        tokens.push(decodeJwt(token)); // Assuming decodeJwt is your decoding function
    }
    // if (token2) {
    //     tokens.push(decodeJwt(token2)); // Assuming decodeJwt is your decoding function
    // }

    // Function to decode JWT token (example)
    function decodeJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    // Update HTML dynamically based on decoded tokens
    const greetingElement = document.getElementById('greeting');
    if (tokens.length > 0) {
        // Example: Use the first user's name to update greeting
        greetingElement.textContent = 'Hi, ' + tokens[0].data.name;
    } else {
        greetingElement.textContent = 'Hi there'; // Fallback greeting if no tokens
    }
});