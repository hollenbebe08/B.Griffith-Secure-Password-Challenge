//Arrays
var upperCaseArray = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharactersArray = ["!", "#", "$", "%", "&", ")", "(", "*", "+", "-", ":", "/", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "_", "`", "{", "}", "|", "~"];
var numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var overallArray =[upperCaseArray, lowerCaseArray, specialCharactersArray, numericalArray];

var upperCaseConfirmation;
var lowerCaseConfirmation;
var specialCharactersConfirmation;
var numericConfirmation;
var passwordLengthInt;

// generatePassword function
var getConfirmations = function () {
  //confirmation to generate password
  window.confirm("Please choose which criteria you would like to include in your password by following the prompts.");

  //prompt for upperCase Array
  upperCaseConfirmation = window.confirm("Would you like to have Uppercase letters in your password?");
  console.log(upperCaseConfirmation);


  //prompt for lowerCase Array
  lowerCaseConfirmation= window.confirm("Would you like to have Lowercase letters in your password?");

  //prompt for special characters
  specialCharactersConfirmation = window.confirm("Would you like to have special characters in your password?");

  //prompt for numeric characters
  numericConfirmation = window.confirm("Would you like to have your password include numbers?");


  //Prompt for password length
  var passwordLengthString = window.prompt("Please type a number between 8 -128 to indicate how long you'd like your password to be.");
//  for (let i=0; i < 10; i++) {
//   console.log(Math.floor(Math.random() * 10));
//  };
  // Password length variables
  passwordLengthInt = parseInt(passwordLengthString);

}; //end of generate password function

var generatePassword= function(upperCaseConfirmation, lowerCaseConfirmation, specialCharactersConfirmation, numericConfirmation, passwordLengthInt) {
  console.log(upperCaseConfirmation, lowerCaseConfirmation, specialCharactersConfirmation, numericConfirmation, passwordLengthInt);
  // var yourPassword= [];
};

//call to action to generate password
getConfirmations();
generatePassword(upperCaseConfirmation, lowerCaseConfirmation, specialCharactersConfirmation, numericConfirmation, passwordLengthInt);

//write password function
// var writePassword = function() {

// };



//Event listener to generate password
document.getElementById("generate"). addEventListener("click", writePassword);
function writePassword() {
  document.getElementById("password").innerHTML = "password text";
};

// var generateBtn = document.querySelector("#generate");

// var passwordText = document.querySelector("#password");

//   passwordText.value = password;

