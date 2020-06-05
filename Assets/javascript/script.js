
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//Creating an object of type character
var character = {
  capitalLetter: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  smallLetter: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  specialCharacters: '!\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~'
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  //Function call checkLengthValidation()
  var password = checkLengthValidation(length);
  return password
}

//Here creating function that checks length of passwords and returns the value
function checkLengthValidation(parselength) {
  var length = prompt("Enter the length of password.\nThe password length must be between (8 - 128) ");
  var parselength = parseInt(length);
  if (parselength < 8 || parselength > 128 || isNaN(parselength)) {
    alert("Enter a valid number between 8 to 128")
    return "Invalid Input"
  }
  else {
    //Function call to include different user reequirement.
    return propmtMessageForUser(parselength);
  }
  return "Invalid Input"
}

//Here creating function that includes variables which will take in user input
function propmtMessageForUser(parselength) {

  var smallletterConfirmBox = confirm("Do you want to include Small letters (a-z).\nPress Ok to include or Cancel to exclude.")
  var capitalletterConfirmBox = confirm("Do you want to include Capital letters (A-Z).\nPress Ok to include or Cancel to exclude.")
  var numConfirmBox = confirm("Do you want to include Numbers (0-9).\nPress Ok to include or Cancel to exclude.");
  var symConfirmBox = confirm("Do you want to include Special characters(!\"#$%&\'()*+,-./:;<=>?@[\]^_\`{|}~).\nPress Ok to include or Cancel to exclude.");
  var characters = "";

  if (!capitalletterConfirmBox && !smallletterConfirmBox && !numConfirmBox && !symConfirmBox) {
    alert("Select at least one character")
    return "Invalid Selection!! Try Again"
  }
  else {
    //Ternary operator to include given characters or not.
    (smallletterConfirmBox) ? characters += character.smallLetter : '';
    (capitalletterConfirmBox) ? characters += character.capitalLetter : '';
    (numConfirmBox) ? characters += character.numbers : '';
    (symConfirmBox) ? characters += character.specialCharacters : '';
    //Function call
    return password(parselength, characters);
  }
}

//Here creating function that takes 2 parameter, iterates through gets random value and stores in variable pwd
function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; i++) {
    pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
    console.log("Inside password pwd is:" + pwd);
  }
  return pwd;
}
