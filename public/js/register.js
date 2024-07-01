$(document).ready(function () {
  $("#health_Register_Btn").click(function (error) {
    // console.log("move on bro ...")
    if ($("#health_Register")[0].checkValidity()) {
      error.preventDefault();
      $("#health_Register_Btn").text("please Wait...");
  

        $.ajax({
          url: "https://hbinnovation.000webhostapp.com/api/register.php",
          method: "POST",
          data: $("#health_Register").serialize(),
          success: function (response) {
            console.log(response)

            if (response.error) {
              $("#passError").text(response.error);
            } else {
              // Handle success responses
              swal.fire({
                title: 'Success!',
                icon: 'success',
                text: response.message
              }).then(() => {
                window.location = "welcome.html";
              });
            }
          }
        });
      }
      // }


    // }
  })
})