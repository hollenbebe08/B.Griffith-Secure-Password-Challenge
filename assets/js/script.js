//Arrays
var upperCaseArray = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharactersArray = ["!", "#", "$", "%", "&", ")", "(", "*", "+", "-", ":", "/", ";", "<", "=", ">", "?", "@", "[", "]", "/", "^", "_", "`", "{", "}", "|", "~"];
var numericalArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var overallArray =[upperCaseArray, lowerCaseArray, specialCharactersArray, numericalArray];

// generatePassword function
var generatePassword = function () {
  //confirmation to generate password
  window.confirm("Please choose which criteria you would like to include in your password by following the prompts.");

  //prompt for upperCase Array
  var upperCaseArray = window.prompt("Would you like to have Uppercase letters in your password?");
  if (upperCaseArray === "NO" || upperCaseArray === "no") {
    window.alert("Alright. No Uppercase letters will be included.");
  } else {(upperCaseArray === "YES" || upperCaseArray === "yes");
    window.alert("Great! Uppercase letters will be included in your password.");
  }

  //prompt for lowerCase Array
  var lowerCaseArray = window.prompt("Would you like to have Lowercase letters in your password?");
  if (lowerCaseArray === "NO" || lowerCaseArray === "no") {
    window.alert("Alright. No Lowercase letters will be included.");
  } else {(lowerCaseArray === "YES" || lowerCaseArray === "yes");
    window.alert("Ok! Lowercase letters will be included in your password.");
  }

  //prompt for special characters
  var specialCharactersArray = window.prompt("Would you like to have special characters in your password?");
  if (specialCharactersArray === "NO" || specialCharactersArray === "no") {
    window.alert("Sounds good. No special characters will be included.");
  } else {(specialCharactersArray === "YES" || specialCharactersArray === "yes");
    window.alert("Can do! Special characters will be included in your password.");
  }

  //prompt for numeric characters
  var numericalArray = window.prompt("Would you like to have your password include numbers?");
  if (numericalArray === "NO" || numericalArray === "no") {
    window.alert("No problem. No numbers will be included.");
  } else {(numericalArray === "YES" || numericalArray === "yes");
    window.alert("Sounds like a plan! Numbers will be included in your password.");
  }

  //Prompt for password length
    var passwordLengthString = window.prompt("Please type a number between 8 -128 to indicate how long you'd like your password to be.");
    var passwordLengthInt = parseInt(passwordLengthString)
    var x = 8;
    var y = 128;
  if(passwordLengthInt < x || passwordLengthInt > y) {
      window.alert("Your password must be between 8 -128 characters in length. Try again!");
  return passwordLengthString;
  } else {(passwordLengthInt > x || passwordLengthInt < y);
      window.alert("Great! Click the 'Generate Password' button to generate your password.");
  }
}; //end of generate password function

//call to action to generate password
generatePassword();


//Event listener to generate password
// document.getElementById("generate"). addEventListener("click", writePassword);
// function writePassword() {
//   document.getElementById("password").innerHTML = "password text";
// };

// var generateBtn = document.querySelector("#generate");

// var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//then add the created arrays to the overallarray

