// Assignment code here

//variable for a number to generate between 8 - 128
var randomNumber = function(min, max) {
  var value=Math.floor(Math.random() * (max-min + 1) + min);
}


//Function to choose the length of the password
function passwordLength () {
  //password must be between 8 -128 characters in length
  window.prompt ("Please type a number between 8 - 128 to indicate how long you'd like your password to be.");
  if (randomNumber(8,128)) {
    window.alert("GREAT! Let's choose the rest of your password's criteria!");
  }
  else {
    window.prompt("Your password must be between 8 - 128 characters in length. Please choose a different number.");
  };
};

passwordLength();

// //Password object
// var passwordInfo {
//   length: randomNumber(8,128)
//   lowerCase:,
//   upperCase:,
//   numeric:,
//   specialCharacters:,
// }

//Event listener to generate password
document.getElementById("generate"). addEventListener("click", writePassword);
function writePassword() {
  document.getElementById("password").innerHTML = "password text";
};

// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
