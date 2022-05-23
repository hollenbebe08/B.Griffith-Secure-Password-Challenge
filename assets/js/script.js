//Arrays
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&()*+-:/<>?@/^`|~";
var numbers = "123456789";

var upperCaseConfirmation;
var lowerCaseConfirmation;
var specialCharactersConfirmation;
var numericConfirmation;
var passwordLength;
var minPasswordLength= 8;
var maxPasswordLength= 128;

var userSelects = "";

// getConfirmations function
var getConfirmations = function () {
  //confirmation to generate password
  window.confirm("Please choose which criteria you would like to include in your password by following the prompts.");

  //prompt for upperCase Array
  upperCaseConfirmation = window.confirm("Would you like to have Uppercase letters in your password? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(upperCaseConfirmation);

  //prompt for lowerCase Array
  lowerCaseConfirmation= window.confirm("Would you like to have Lowercase letters in your password? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(lowerCaseConfirmation);

  //prompt for special characters
  specialCharactersConfirmation = window.confirm("Would you like to have special characters in your password? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(specialCharactersConfirmation);

  //prompt for numeric characters
  numericConfirmation = window.confirm("Would you like to have your password include numbers? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(numericConfirmation);

  //Prompt for password length
  var passwordLength = window.prompt("Please type a number between 8 -128 to indicate how long you'd like your password to be.");
  passwordLength= Number.parseInt(passwordLength, 10);
  console.log(passwordLength);

  //In the case that no criteria are chosen
  // if (getConfirmations === "") {
  //   window.alert("You must choose at least one criteria to include in your password. Please try again!")
  //   return upperCaseConfirmation
  // };

}; //end of get confirmations function


//function to generate password if variable is true
var generatePassword= function() {
  //if upperCase was selected
   if(upperCaseConfirmation){
     userSelects = userSelects + upperCase
   };

  //if lowerCase was selected
  if(lowerCaseConfirmation){
    userSelects = userSelects + lowerCase
  };

  //if special characters selected
  if(specialCharactersConfirmation){
    userSelects = userSelects + specialCharacters
  }

  //if numbers selected
  if(numericConfirmation){
    userSelects = userSelects + numbers
  };

  //setting the password Length
  if(!Number.isNaN(passwordLength) && passwordLength >= minPasswordLength && passwordLength <= maxPasswordLength) {
    while (password.length < passwordLength) {
      var randomIndexChoice= Math.floor(Math.random() * userSelects.length);
      var randomPasswordCharacter= userSelects.charAt(randomIndexChoice);
      password= password + randomPasswordCharacter
    }
  }
};

//calls functions to action
getConfirmations();
generatePassword();


//Event listener to generate password
var generateBtn= document.queryselector("#generate");
generateBtn.addEventListener("click", function () {
  var password=generatePassword()
  var passwordToShow= document.querySelector("#password")
  passwordToShow.textContent = password
});

