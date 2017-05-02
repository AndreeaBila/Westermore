//stuff for user interface
//jQUery
//blah blah
//andreea e 0 :))












//SIGN UP SCRIPT
//call this method when the user presses the sign up button and wants to create an account on the server
//verify if his passwords match and handle the process
//if they do call this method to begin the create account process
function createAccount() {
    //get the form into a json format
    var formString = $('#signupForm').serialize();

    //create an ajax connection with the database
    $.ajax({
        data: formString,
        type: 'post',
        url: '../php/createAccount.php',
        success: function(response) {
            //don't do anything
            //php will move the user to the next page in the structure
        },
        error: function(response) {
            //display an alert staiting that the singup information was wrong
        }
    });
}

//LOG IN SCRIPT
//call this method when the uer presses the login button and wants to signin in his web account
function signIn() {
    //convert the information from the login form into a json readeable data
    var loginData = $('#loginForm').serialize();
    //send the data to the database using jQuery and ajax
    $.ajax({
        data: loginData,
        type: 'post',
        url: '../php/signinScript.php',
        success: function(response) {
            //don't do anything
            //php will move the user to the desired webpage
        },
        error: function(response) {
            //display an alert staiting that the login information was wrong
        }
    });
}