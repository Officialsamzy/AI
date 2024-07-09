
$(document).ready(function () {
    $("#RoboHealthLogin").click(function (e) {
        e.preventDefault()
        // console.log("jjjj");
        $.ajax({
            url: "https://hbinnovation.000webhostapp.com/api/login.php",
            type: "POST",
            data: $("#loginForm").serialize(),
            success: function (response) {
                console.log(response)
                if (response.error) {
                    // Handle error responses
                    swal.fire({
                        title: 'Oops!',
                        icon: 'error',
                        text: response.error
                    });
                } else {
                    // localStorage.setItem('token', response.token);
                    // Handle success responses
                    swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        text: response.message
                    }).then(() => {
                        localStorage.setItem('token', response.token);
                        window.location = "home.html"; // Redirect after login
                    });
                }
            }
        });
    })
    
})
// export JWT_SECRET_KEY="Ahryfc0oGrdfPfUeuo6R45e0GHNjpfiWV6kxdCzgZ+Y="

