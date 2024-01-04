function convertDecimalToBinary() {
	// Get the decimal input value
	var decimalInput = document.getElementById("decimalInput").value;
  
	// Validate input
	if (isNaN(decimalInput) || decimalInput === "") {
	  alert("Please enter a valid decimal number.");
	  return;
	}
  
	// Convert decimal to binary
	var binaryOutput = (decimalInput >>> 0).toString(2);
  
	// Display the result
	document.getElementById("binaryOutput").textContent = "Binary Result: " + binaryOutput;
  }
  