// 存储用户名的队列
var uname = new Array();
uname[0] = "admin";
// 存储密码的队列
var upwd = new Array();
upwd[0] = "admin";

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
  var flag = false;
  for (var i = 0; i < uname.length; i++) {
    if (username === uname[i] && password === upwd[i]) {
      flag = true;
      break;
    }
  }
  // 跳转至主页
  window.location.href = "index.html";
}
