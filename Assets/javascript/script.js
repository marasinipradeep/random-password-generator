// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
  //Validating  user input length 
  var password = checkLengthValidation(length);
  return password
}

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
    
    var numConfirmBox = confirm("number??");
    var symConfirmBox = confirm("symbol??");
    var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = '0123456789';
    var sym = '!@#$%^&*=-_';
    
      var characters = char;
      (numConfirmBox) ? characters += num : '';
      (symConfirmBox) ? characters += sym : '';
      return password(parselength, characters);
  }
}

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
