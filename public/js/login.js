
$(document).ready(function () {
    $("#RoboHealthLogin").click(function (e) {
        e.preventDefault()
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
                    // Handle success responses
                    swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        text: response.message
                    }).then(() => {
                        window.location = "home.html"; // Redirect after login
                    });
                }
            }
        });
    })
})

