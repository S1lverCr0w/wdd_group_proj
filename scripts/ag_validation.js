// andrei form validation script
// public variable declaration


















var sUserName,
	targetElementMessage,
	targetElementLogin,
	targetElementMain,
	targetElementBtm;

function validateData() {
	// assign id of certain tags to these variables
	sUserName = document.getElementById("userName").value;
	targetElementMessage = document.getElementById("message");
	targetElementLogin = document.getElementById("loginScreen");
	targetElementMain = document.getElementById("mainScreen");
	targetElementBtn = document.getElementById("submitBtn");

	// if the length of username is less than 3 then enable login button
	if(sUserName.length > 2) {
		// alert("ok");
		targetElementBtn.disabled = false;
	} else {
		// alert("please provide a valid username");
		targetElementBtn.disabled = true;
	}
}

function authenticate() {
	// display a message with user's username and hide the login fields
	targetElementMessage.innerHTML = "Hello " + sUserName + ", you are authenticated!";
	targetElementLogin.style.display = "none";
	targetElementMain.style.display = "block";
}

function logOut() {
	// delete the greeting message and show the lgin fields
	document.getElementById("userName").value = "";
	targetElementLogin.style.display = "block";
	targetElementMain.style.display = "none";
}

