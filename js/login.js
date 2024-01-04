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

function setCookie(name, value, days) {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  var cookieString =
    name +
    "=" +
    value +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/";

  document.cookie = cookieString;
}

function registerVali() {
  var username = document.getElementById("reg-username").value;
  var password = document.getElementById("reg-password").value;
  var co_password = document.getElementById("password-co").value;

  if (username === "") {
    document.getElementById("reg-usernameError").innerHTML =
      "Username is required";
    document.getElementById("reg-username").focus();
    return;
  }

  if (password === "") {
    document.getElementById("reg-passwordError").innerHTML =
      "Password is required";
    document.getElementById("reg-password").focus();
    return;
  }

  if (username != "" && password != "") {
    if (password.length < 6) {
      document.getElementById("reg-passwordError").innerHTML =
        "密码长度不能小于6位";
      document.getElementById("reg-password").focus();
      return;
    } else if (password.length > 15) {
      document.getElementById("reg-passwordError").innerHTML =
        "密码过长，请重新输入";
      document.getElementById("reg-password").focus();
      return;
    }

    if (co_password === "") {
      document.getElementById("reg-passwordError").innerHTML =
        "请再输入一次密码进行确认";
      document.getElementById("password-co").focus();
    } else if (co_password != password) {
      document.getElementById("reg-passwordError").innerHTML =
        "两次输入的密码不一致，请重新输入";
      document.getElementById("password-co").focus();
    } else {
      alert("注册成功！");
      uname.push(username);
      upwd.push(password);
      flag = true;
      setCookie("isLoggedIn", true, 10);
      window.location.href = "index.html";
    }
  }
}
