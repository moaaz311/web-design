function onSubmit() {
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var Confirm = document.getElementById("confirm-password").value;
    var error = document.getElementById("error");
    var text = "";

    if (Email.length < 5 || Email.indexOf("@") == -1) {
        text = "Enter a valid email, please.";
        error.innerHTML = text;
        return false;
    } else if (Password.length < 5|| isNaN(Password)) {
        text = "Enter a num only ,at least 5 num ";
        error.innerHTML = text;
        return false;
    } else if (Password != Confirm) {
        text = "Please enter the same password.";
        error.innerHTML = text;
        return false;
    } else {
        alert("Thanks for visiting our website. You are now being redirected to the login page. Click OK.");
        return true;
    }
}

function onlog() {
    var User_name = document.getElementById("username").value;
    var Password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (User_name.length < 3) {
        text = "Invalid name!!";
        error.innerHTML = text;
        return false;
    } else if (Password.length < 3 || isNaN(Password)) {
        text = "Password must be at least 5 numbers!";
        error.innerHTML = text;
        return false;
    } else {
        alert("Login successfully");
        return true;
    }
}

function Logout() {
    if (confirm("Are you sure you are going to log out?")) {
        // Proceed with the logout
        return true; // This will allow the link to navigate to the login.html page
    } else {
        // Cancel the logout
        return false; // This will prevent the link from navigating to the login.html page
    }
}
