/*
Lucas Eberhard
Henry Kang
Web Programming - CMPSCI 3010
4/10/18
*/

function firstNameTest() {
	
	var firstName = document.getElementsByName("firstName")[0].value;
	
	if (firstName == "") {
		alert("Missing required field: First Name\n");
	}
	else {
		if (firstName.search(/^[A-Z][a-z]+$/) != 0) {
			alert("First name must start with a capital letter and only contain lowercase letters after.\n\nYou entered: " + firstName + "\n");
		}
	}
	
}

function lastNameTest() {
	
	var lastName = document.getElementsByName("lastName")[0].value;
	
	if (lastName == "") {
		alert("Missing required field: Last name\n");
	}
	else {
		if (lastName.search(/^[A-Z][a-z]+$/) != 0) {
			alert("Last name must start with a capital letter and only contain lowercase letters after.\n\nYou entered: " + lastName + "\n");
		}
	}
	
}

function emailTest() {
	
	var email = document.getElementsByName("email")[0].value;
	var email2 = document.getElementsByName("email2")[0].value;
	
	if (email == "") {
		alert("Missing required field: Email address");
	}
	if (email2 == "") {
		alert("Missing required field: Confirm email address");
	}
	else {
		if (email2 != email) {
			alert("Email addresses do not match.\n\nYou entered: " + email + " and " + email2 + "\n");
		}
	}

}

function userNameTest() {
	
	var userName = document.getElementsByName("userName")[0].value;
	
	if (userName == "") {
		alert("Missing required field: Username");
	}
	else {
		if (userName.search(/^[A-Za-z]\w+$/) != 0) {
			alert("Username must start with a letter and only contain alphanumeric characters after that.\n\nYou entered: " + userName + "\n");
		}
	}

}

function pwdTest() {

	var pwd = document.getElementsByName("pwd")[0].value;
	var pwd2 = document.getElementsByName("pwd2")[0].value;
	
	if (pwd == "") {
		alert("Missing required field: Password");
	}
	else {
		if (pwd.search(/^[A-Z]\w{6}\d$/) != 0) {
			alert("Password must start with a capital letter followed by 6 (six) alphanumeric characters followed by a single digit.\n\nYou entered: " + pwd + "\n");
		}
	}

	if (pwd2 == "") {
		alert("Missing required field: Confirm password");
	}
	else {
		if (pwd2 != pwd) {
			alert("Passwords do not match.\n\nYou entered: " + pwd + " and " + pwd2 + "\n");
		}
	}
	
}
	
function phoneNumberTest() {
	
	var phoneNumber = document.getElementsByName("phoneNumber")[0].value;

	if (phoneNumber == "") {}
	else {
		if (phoneNumber.search(/^\d{3}-?\d{3}-?\d{4}$/) != 0) {
			alert("Phone number must fit one of the following formats:\nxxx-xxx-xxxx, xxx-xxxxxxx, xxxxxxx-xxx, xxxxxxxxxx\n\nYou entered: " + phoneNumber + "\n");
		}
	}
	
}