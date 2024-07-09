
document.addEventListener('DOMContentLoaded', async function() {
    const token = localStorage.getItem('token');
    if (!token) {
        // Redirect to login page if no token is found
        window.location = "login.html";
    } else {
        try {
            const response = await fetch('https://hbinnovation.000webhostapp.com/api/fetch.php', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.user) {
                    document.getElementById('userName').textContent = 'Name: ' + data.user.fullname;
                    document.getElementById('userEmail').textContent = 'Email: ' + data.user.email;
                } else if (data.error) {
                    console.error('Error from server:', data.error);
                }
            } else if (response.status === 401) {
                // Redirect to login page if unauthorized
                window.location = "login.html";
            } else {
                console.error('Request failed with status:', response.status);
            }
        } catch (error) {
            console.error('Network error or CORS issue:', error);
        }
    }
});

