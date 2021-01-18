const togglePassword = document.querySelector('#togglePassword');
const LoginForm_Password = document.querySelector('#LoginForm_Password');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = LoginForm_Password.getAttribute('type') === 'password' ? 'text' : 'password';
    LoginForm_Password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
