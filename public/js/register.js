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
            $("#health_Register_Btn").text("Sign Up");
          } else {
            // Handle success responses
            swal.fire({
              title: 'Success!',
              icon: 'success',
              text: response.message
            }).then(() => {
              localStorage.setItem('token', response.token);
              window.location = "welcome.html";
            });
          }
        }
      });
    }else{
      $("#health_Register_Btn").text("Sign Up");
    }

  })
})

function togglePassword(id) {
  const passwordField = document.getElementById(id);
  const toggleIcon = passwordField.nextElementSibling;

  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleIcon.textContent = 'visibility';
  } else {
      passwordField.type = 'password';
      toggleIcon.textContent = 'visibility_off';
  }
}
