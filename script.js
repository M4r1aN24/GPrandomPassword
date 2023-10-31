// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var generate = document.getElementById("generate");
var passwordText = document.getElementById("password");
var password = {
  length: 0,
  uppercase: false,
  lowercase: false,
  special: false,
  numeric: false
};

var finalPassword = '';
var allCharacters = [];

// Function to prompt user for password options
function getPasswordOptions() {

  var length = prompt("Please choose a number between 8 - 128. The password will not work if you chose a bigger/smaller number.");
  password.length = parseInt(length);

if(length < 8) {
  alert("The number chosen it's to low. Choose another one. ");
} else if (length > 128) {
  alert("The number chosen it's to big. Choose another one.");
} else {
  alert("That's great! Now let's go to the next step");
}

while(!password.uppercase && !password.lowercase && !password.special && !password.numeric ){
  password.lowercase = confirm("Would you like lowercase characters included? ");
  password.uppercase = confirm("Would you like uppercase characters included? ");
  password.special = confirm("Would you like special characters included? ");
  password.numeric = confirm("Would you like numeric characters included? ");
  alert("Please make sure you pick one of the options");
  
}

 if(password.uppercase === true){
  allCharacters = allCharacters.concat(upperCasedCharacters);
 } 
 if(password.lowercase === true){
  allCharacters = allCharacters.concat(lowerCasedCharacters);
 } 
 if(password.numeric === true){
  allCharacters = allCharacters.concat(numericCharacters);
 } 
 if(password.special === true){
  allCharacters = allCharacters.concat(specialCharacters);
 } 

 generatePassword(password);
}

// Function for getting a random element from an array
function getRandom() {
  var randomNumber = Math.floor(Math.random() * allCharacters.length );
  return allCharacters[randomNumber]
}

// Function to generate password with user input
function generatePassword(password) {
console.log("Hello");
 var endArray = [];

  for (var i= 0; i < password.length; i++) {
    var elements = getRandom(allCharacters);
    endArray.push(elements);
  }
  finalPassword = endArray.join('')

  passwordText.textContent = finalPassword;
  return endArray.join('')
  var options = getPasswordOptions();
}

generate.addEventListener("click", getPasswordOptions);