function validateForm() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  document.getElementById("usernameError").innerHTML = "";
  document.getElementById("passwordError").innerHTML = "";

  if (username === "") {
    document.getElementById("usernameError").innerHTML = "Username is required";
    document.getElementById("username").focus();
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Password is required";
    document.getElementById("password").focus();
  }

  if (username.length < 8 || username.length > 20) {
    document.getElementById("usernameError").innerHTML =
      "Username must be between 8 and 20 characters";
    document.getElementById("username").focus();
    return;
  }

  if (password.length < 8 || password.length > 20) {
	document.getElementById("passwordError").innerHTML = "Password must be between 8 and 20 characters";
	document.getElementById("password").focus();
	return;
}


alert("Form submitted successfully!");
}
