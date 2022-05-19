
// generatePassword function
  var generatePassword = function () {
  var passwordLength = window.prompt("Please type a number between 8 -128 to indicate how long you'd like your password to be.");
  var x = parseInt("8");
  var y = parseInt("128");
    
  if(passwordLength < x || passwordLength > y) {
    window.alert("Your password must be between 8 -128 characters in length. Try again!")

    return passwordLength;
  }
  else {(passwordLength > x || passwordLength < y)
    window.alert("Great! Let's choose the rest of your password's criteria!");
  }
  };

  generatePassword();

  var passwordText = {
    length: generatePassword(),

  };

 function writePassword() {
 };

//Event listener to generate password
document.getElementById("generate"). addEventListener("click", writePassword);
function writePassword() {
  document.getElementById("password").innerHTML = "password text";
};

// var generateBtn = document.querySelector("#generate");

// var passwordText = document.querySelector("#password");

//   passwordText.value = password;

