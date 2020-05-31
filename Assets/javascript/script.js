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
  }

  else if (isNaN(parselength)) {
    alert("Length can not be string");

  }
  else {
   return lowerCase(parselength);

    // console.log("INside checkLengthValidation: "+ parselength)
    // return parselength;
  }
}


function lowerCase(l) {

  console.log("value of l is " + l)
  var lowerCases = confirm("Do you want to include lower case")

  if (lowerCases === false) {
    upperCase(lowerCases);
  }
  else {
      //ASCII lower case character(a-z) code starts from 97 to 122
      lowerCases = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
      console.log("lower caseS : " + lowerCases);
      return upperCase(lowerCases);
  }
}

function upperCase(l) {

  var upperCases = confirm("Do you want to include Upper case")

  if (upperCases === false) {
    number(upperCases);
  }
  else {
    //ASCII upper case character(a-z) code starts from 65 to 90
    upperCases = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    upperCases += l;
    return number(upperCases);
  }
  
}

function number(l) {

  var numbers = confirm("Do you want to include Numbers ")

  if (numbers === false) {
    symbol(numbers);
  }
  else {
    //ASCII number (0-9) code starts from 48 to 57
    numbers = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    numbers += l;
    return symbol(numbers);
  }
}



function symbol(l) {

  var symbols = confirm("Do you want to include special characters ")

  if (symbols === false) {
    checkLengthValidation();
  }
  else {
    const specialCharacters = "!@#$%^&*()_+<>,./"
    symbols = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    symbols += l;
    return symbols;
  }
}
