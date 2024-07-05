$(document).ready(function() {
    $.ajax({
        url: 'https://hbinnovation.000webhostapp.com/api/fetch.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response)
            // if (response.error) {
            //     Swal.fire({
            //         title: 'Error!',
            //         icon: 'error',
            //         text: response.error
            //     });
            // } else {
            //     const user = response.user;
            //     $('#userDetails').html(`<p>Name: ${user.fullname}</p><p>Email: ${user.email}</p>`);
            // }
        },
        // error: function(jqXHR, textStatus, errorThrown) {
        //     console.error('Error:', textStatus, errorThrown);
        //     Swal.fire({
        //         title: 'Error!',
        //         icon: 'error',
        //         text: 'An error occurred while fetching user details. Please try again.'
        //     });
        // }
    });
});