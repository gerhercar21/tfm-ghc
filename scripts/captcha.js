    function validateForm() {
        var response = grecaptcha.getResponse();
        if (response.length === 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Verifica que no eres un robot...</span>';
            return false;
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:green;">¡Eres un humano!</span>';
            return true;
        }
    }

    function verifyCaptcha(response) {
        if (response === '') {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Verifica que no eres un robot...</span>';
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:green;">¡Eres un humano!</span>';
        }
    }

