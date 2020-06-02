
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


var character = {
  capitalLetter: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  smallLetter: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  specialCharacters: '!@#$%^&*=-_'
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  //Validating  user input length 
  var password = checkLengthValidation(length);
  return password
}

//Check length of password at begining
function checkLengthValidation(parselength) {

  var length = prompt("Enter the length of password");
  var parselength = parseInt(length);

  if (parselength < 8 || parselength > 128) {
    alert("Enter a valid number between 8 to 128")
    return "Invalid Input"
  }

  else if (isNaN(parselength)) {
    alert("Length can not be string");
    return "Invalid Input"

  }
  else {
    //Function call to include different user reequirement.
    return propmtMessageForUser(parselength);
  }
  return
}

//Prompting through different series of question to meet user conditions
function propmtMessageForUser(parselength){

    var capitalletterConfirmBox = confirm("capital letter??")
    var smallletterConfirmBox = confirm("small letter??")
    var numConfirmBox = confirm("number??");
    var symConfirmBox = confirm("symbol??");
    var characters = "";

   if(!capitalletterConfirmBox && !smallletterConfirmBox && !numConfirmBox && !symConfirmBox){
     alert("Select at least one character")
     return "Invalid Selection!! Try Again"
   }
   else{

     //Ternary operator to check wether  include given characters or not.
    (capitalletterConfirmBox) ? characters += character.capitalLetter : '';
    (smallletterConfirmBox) ? characters += character.smallLetter : '';
    (numConfirmBox) ? characters += character.numbers : '';
    (symConfirmBox) ? characters += character.specialCharacters : '';

    //Calling for function password which iterates length provided by user
    return password(parselength, characters); 
  }
}

//Function to iterate through users length requirement
function password(l, characters) {
  console.log("Inside Function : " + l);
  var pwd = '';
  for (var i = 0; i < l; i++) {
    console.log("Inside Function before loop pwd is:" + pwd);
    pwd = pwd + characters.charAt(Math.floor(Math.random() * characters.length));
    console.log("Inside Function loop pwd is:" + pwd);
  }
  return pwd;
}
