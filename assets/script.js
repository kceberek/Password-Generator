//Global variables
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const specialCharacters = ['~','!','@', '#','$','%','^','&','*','(',')','-','=','/',';']

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate array and show one character
function getRandom(array){
  var character = array[Math.floor(Math.random() * array.length)];
  return character;
}
// Function to advise of the length of the password
function generatePassword(){
  let length = parseInt(prompt("How many characters would you like your password to be?"));

  if(length < 8){
    alert("Your password must contain at least 8 characters");
    return;
  }

  if(length > 128){
    alert("Your password must contain less than 128 characters");
    return;
  }

  // General variables to ask which character user wants
  let containLowercase = confirm("Click OK to include lowercase characters in your password");

  let containUppercase = confirm("Click OK to include uppercase characters in your password");

  let containNumbers = confirm("Click OK to include numbers in your password");

  let containSpecial = confirm("Click OK to include special characters in your password");

  if(containLowercase === false &&
    containUppercase === false &&
    containNumbers === false &&
    containSpecial === false
  ) {
    alert("You must select at least one option for your password");
    return;
  }

  // Pushing at least one character
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if(containLowercase){
    possibleCharacters = possibleCharacters.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if(containUppercase){
    possibleCharacters = possibleCharacters.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  if(containNumbers){
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if(containSpecial){
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  // Loop over arrays to generate random characters per length the user requested
  for(let i = 0; i < length; i++){
    var possibleChar = getRandom(possibleCharacters);
    result.push(possibleChar);
    console.log(result)
  }

  //loop over your guaranteed array to ensure the user will get the characters criteria chosen
  for(let i=0; i< getRandom.length; i++) {
    var 
  }
  
  
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);

  return result.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



