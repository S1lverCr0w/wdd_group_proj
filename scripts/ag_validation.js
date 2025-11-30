// andrei form validation script
// public variable declaration

insert_pop_up();

function insert_pop_up() {
	var pop_up_html = `
		<div id="overlay"></div>
		<div id="pop_up">
			<label for="ag_username">Username:</label>
			<br>
			<input type="text" id="ag_username" name="ag_username" placeholder="Enter your username">
			<br>

			<label for="ag_passwd">Password:</label>
			<br>
			<input type="password" id="ag_passwd" name="ag_passwd" placeholder="passsword">
			<br>
			<span id="login_error" class="error_message"></span>
			<br>
			<div class="ag_center">
				<button onclick="log_in();">Log in</button>
				<button type="reset" onclick="hide_pop_up();">Cancel</button>
			</div>
		</div>
		`;

	document.body.insertAdjacentHTML("afterbegin", pop_up_html);
	hide_pop_up();
}


function hide_pop_up() {
	document.getElementById("overlay").style.display = "none";
	document.getElementById("pop_up").style.display = "none";
}


function pop_up() {
	document.getElementById("overlay").style.display = "block";
	document.getElementById("pop_up").style.display = "block";
}


function log_in() {
	hide_pop_up();
}


function validate_form() {
	const username = document.getElementById("ag_username").value;
	const fname = document.getElementById("ag_fname").value;
	const lname = document.getElementById("ag_lname").value;
	const email = document.getElementById("ag_email").value;
	const date = document.getElementById("ag_date").value;
	const passwd = document.getElementById("ag_passwd").value;
	const rpasswd = document.getElementById("ag_rpasswd").value;
	const agree = document.getElementById("ag_agree").value;
}




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

