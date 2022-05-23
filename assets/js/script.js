//Variables
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!.#.$.%.&.(,)*.+.-.:./.<,>.?.@./.^.`.|.~";
var numbers = "1234567890";

var upperCaseConfirmation;
var lowerCaseConfirmation;
var specialCharactersConfirmation;
var numericConfirmation;
var passwordLength;
var minPasswordLength= 8;
var maxPasswordLength= 128;

var userSelects = "";
var password = "";

// getConfirmations function
var generatePassword = function () {
  //Prompt for password length
  var passwordLength = window.prompt("Please type a number between 8 -128 to indicate how long you'd like your password to be.");
  passwordLength= Number.parseInt(passwordLength, 10);
  console.log(passwordLength);
  
  //prompt for upperCase
  upperCaseConfirmation = window.confirm("Would you like to have Uppercase letters in your password? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(upperCaseConfirmation);
    //if upperCase was selected
    if(upperCaseConfirmation === true) {
      userSelects = userSelects + upperCase
    }

  //prompt for lowerCase 
  lowerCaseConfirmation= window.confirm("Would you like to have Lowercase letters in your password? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(lowerCaseConfirmation === true);
  if(lowerCaseConfirmation){
    userSelects = userSelects + lowerCase
  };

  //prompt for special characters
  specialCharactersConfirmation = window.confirm("Would you like to have special characters in your password? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(specialCharactersConfirmation === true);
  if(specialCharactersConfirmation){
    userSelects = userSelects + specialCharacters
  }

  //prompt for numeric characters
  numericConfirmation = window.confirm("Would you like to have your password include numbers? If yes click 'OK' or if no click 'CANCEL'.");
  console.log(numericConfirmation === true);
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

  return password

}; //end of generate Password function

//calls function to action
generatePassword();



//Event listener to generate password
var generateBtn= document.querySelector("#generate");
generateBtn.addEventListener("click", function() {
  var password= generatePassword()
  var passwordShown= document.querySelector("#password")
  passwordShown.textContent= password
});

