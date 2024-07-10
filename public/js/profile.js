document.addEventListener('DOMContentLoaded', function () {
    const token = localStorage.getItem('token');
    if (token) {
        const decodedToken = decodeJwt(token);
        document.getElementById('name').value = decodedToken.data.name || '';
        document.getElementById('gender').value = decodedToken.data.gender || '';
        document.getElementById('dob').value = decodedToken.data.dateofbirth || '';
        document.getElementById('country').value = decodedToken.data.country || '';
        document.getElementById('userId').value = decodedToken.data.id || '';
        if (decodedToken.data.profilepic) {
            document.querySelector('.profile-picture img').src = 'https://hbinnovation.000webhostapp.com/api/' + decodedToken.data.profilepic;
        }
    }

    function decodeJwt(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    $("#updateProfileForm").submit(function(e){
        e.preventDefault();
        const formData = new FormData(this);
        const userId = document.getElementById('userId').value;
        formData.append('userId', userId);

        $.ajax({
            url: 'https://hbinnovation.000webhostapp.com/api/update.php',
            method: 'POST',
            processData: false,
            contentType: false,
            cache: false,
            data: formData,
            beforeSend: function(){
              $("#updateProfileFormBtn").attr('disabled', 'disabled');
              $("#updateProfileForm").css('opacity', '.5');
            },
            success: function(response){
              $("#updateProfileFormBtn").removeAttr('disabled');
              $("#updateProfileForm").css('opacity', '');
                console.log(response)
              if (response.success) {
                
                // Save the new token in local storage
                localStorage.setItem('token', response.token);

                Swal.fire({
                    icon: 'success',
                    text: 'You have successfully updated your profile',
                    title: 'Profile Updated'
                }).then(() => { 
                    window.location.reload();
                });
              } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Failed to update profile: ' + response.error,
                    title: 'Update Failed'
                });
              }
            }
        });
    });
});
