    function validateForm() {
        var response = grecaptcha.getResponse();
        if (response.length === 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Por favor completa el reCAPTCHA.</span>';
            return false;
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:green;">¡reCAPTCHA completado!</span>';
            return true;
        }
    }

    function verifyCaptcha(response) {
        if (response === '') {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Por favor completa el reCAPTCHA.</span>';
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:green;">¡reCAPTCHA completado!</span>';
        }
    }

