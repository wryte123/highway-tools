// 存储用户名的队列
var uname = new Array();
uname[0] = "admin";
// 存储密码的队列
var upwd = new Array();
upwd[0] = "admin";

var isLoggedIn = getCookie("isLoggedIn");
var flag = isLoggedIn === "true";
var sliderElement = document.querySelector(".head-ul li:nth-child(5) .slider");

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  if (username === "") {
    document.getElementById("usernameError").innerHTML = "Username is required";
    document.getElementById("username").focus();
    return;
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Password is required";
    document.getElementById("password").focus();
    return;
  }

  // 验证用户名和密码

  for (var i = 0; i < uname.length; i++) {
    if (username === uname[i] && password === upwd[i]) {
      flag = true;
      break;
    } else {
      document.getElementById("usernameError").innerHTML =
        "Username or password is incorrect";
      document.getElementById("username").focus();
    }
  }

  if (flag) {
    sliderElement.style.backgroundColor = "red";
    setCookie("isLoggedIn", true, 10);
    window.location.href = "index.html";
  }
}

function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring((name + "=").length, cookie.length);
    }
  }
  return "";
}
