    function validateForm() {
        // Verificar el ancho de la pantalla
        if (window.innerWidth <= 575) {
            return true; // No se aplica la validación en pantallas pequeñas
        }
        
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
        // Verificar el ancho de la pantalla
        if (window.innerWidth <= 575) {
            return; // No se aplica la validación en pantallas pequeñas
        }

        if (response === '') {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Verifica que no eres un robot...</span>';
        } else {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:green;">¡Eres un humano!</span>';
        }
    }
