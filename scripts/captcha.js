// function miFuncion(a) {
//     var response = grecaptcha.getResponse();

//     if(response.length == 0){
//       alert("Captcha no verificado. Ayúdame a verificar que no eres un robot.")
// return false;
//       event.preventDefault();
//     } else {
//       alert("¡Enhorabuena, no eres un robot! Tu mensaje ha sido enviado con éxito.");
// return true;
//     }
// }

var recaptcha_response = '';
function submitUserForm() {
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red; font-weight:500;">Verifica que no eres un robot.</span>';
        return false;
    }
    return true;
}
 
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:green; font-weight:500;">¡Eres humano!</span>';
}