let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let loginButton = document.getElementById("loginButton");
let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");

admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  if (usernameInput.value == "admin" && passwordInput.value == "admin") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    admin.style.display = "block";
    basic.style.display = "none";
    logoutButton.style.display = "block";
  } else {
    localStorage.setItem("role", "basic");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginButton.style.display = "none";
    basic.style.display = "block";
    admin.style.display = "none";
    logoutButton.style.display = "block";
  }
}

if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginButton.style.display = "none";
  logoutButton.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    basic.style.display = "none";
    admin.style.display = "block";
  } else {
    basic.style.display = "block";
    admin.style.display = "none";
  }
}

function onLogout() {
  localStorage.clear();
  location.reload();
}
