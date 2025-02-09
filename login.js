function showIllustration(type) {
    document.querySelector('.image_login').style.display = type === 'login' ? 'block' : 'none';
    document.querySelector('.image_register').style.display = type === 'register' ? 'block' : 'none';
    document.querySelector('.image_otp').style.display = type === 'otp' ? 'block' : 'none';
}
function toggleForm(showFormId) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('email-form').style.display = 'none';
    document.getElementById('otp-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById(showFormId).style.display = 'block';
}

function showOtpForm() {
    toggleForm('otp-form');
}

function showRegisterForm() {
    toggleForm('register-form');
}