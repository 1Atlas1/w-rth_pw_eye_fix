function toggle() {
  var password = document.getElementById("LoginForm_Password");
  if (password.type === "password") {
    password.type = "text";
    document.getElementById("eye-pw").className = "far fa-eye";
  } else {
    password.type = "password";
    document.getElementById("eye-pw").className = "far fa-eye-slash";
  }
}
