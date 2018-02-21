function validate() {
    $('#company').on('change', showHideCompanyInfo);


    $('#submit').on('click', function (ev) {
        ev.preventDefault();
        let usernameRgx = /^[a-zA-Z0-9]{3,20}$/;
        let emailRgx = /@.*\./;
        let passwordRgx = /^\w{5,15}$/;
        let compNumRgx = /^[1-9]{1}[0-9]{3}$/;

        let formIsValid = true;

        if ($('#username').val().match(usernameRgx)) {
            $('#username').css('border', 'none');
        } else {
            $('#username').css('border-color', 'red');
            formIsValid = false;
        }

        if ($('#password').val().match(passwordRgx)) {
            $('#password').css('border', 'none');
        } else {
            $('#password').css('border-color', 'red');
            formIsValid = false;
        }

        if ($('#email').val().match(emailRgx)) {
            $('#email').css('border', 'none');
        } else {
            $('#email').css('border-color', 'red');
            formIsValid = false;
        }

        if ($('#confirm-password').val().match(passwordRgx) && $('#confirm-password').val().localeCompare($('#password').val()) == 0) {
            $('#confirm-password').css('border', 'none');
        } else {
            $('#confirm-password').css('border-color', 'red');
            formIsValid = false;
        }

        if ($('#company').is(':checked')) {
            if ($('#companyNumber').val().match(compNumRgx)) {
                $('#companyNumber').css('border', 'none');
            } else {
                $('#companyNumber').css('border-color', 'red');
                formIsValid = false;
            }
        }

        if (formIsValid) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    });


    function showHideCompanyInfo() {

        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none');
        }
    }
}
