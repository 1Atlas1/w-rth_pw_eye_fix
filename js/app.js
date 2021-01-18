function toggle_eye() {
//getting PW input field
  var password = document.getElementById("LoginForm_Password");
  if (password.type === "password") {
//unmasking password and toggle eye icon
    password.type = "text";
    document.getElementById("eye-pw").className = "far fa-eye";
  } else {
//masking password and toggle eye icon
    password.type = "password";
    document.getElementById("eye-pw").className = "far fa-eye-slash";
  }
}
