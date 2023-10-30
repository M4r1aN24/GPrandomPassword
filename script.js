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

var password = {
  length: 0,
  uppercase: false,
  lowercase: false,
  special: false,
  numeric: false
};
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

console.log(length);

while(!password.uppercase && !password.lowercase && !password.special && !password.numeric ){
  alert("Please make sure you pick one of the options");
  password.lowercase = confirm("Would you like lowercase characters included? ");

  password.uppercase = confirm("Would you like uppercase characters included? ");

  password.special = confirm("Would you like special characters included? ");

  password.numeric = confirm("Would you like numeric characters included? ");
  console.log(password);
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
  return password;
}

generatePassword();

// Function for getting a random element from an array
function getRandom() {
  var randomNumber = Math.floor(Math.random() * allCharacters.length );
  return allCharacters [randomNumber]
   // build an array of all possible options based on user preferences
   //   upper/lower/numeric ==> 26 + 26 + 10 = 62
}



// Function to generate password with user input
function generatePassword() {

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
  
  // get the password options
  var options = getPasswordOptions();
console.log(getRandom());
  // connect all the arrays that the user said they want to use
  // use conditionals to choose which arrays to concatenate
  // for example, if they want the special characters and the lowercase characters,
  //    put those arrays together

  // use the user's input for length to generate that number of random elements from the array
  // MAYBE TOO COMPLICATED: divide the user requested length by the number of different character classes so that
  //    the password is evenly divided among the types of characters
  // BUT CONSIDER
  //    How do we ensure that the password contains at least one of each character type
  // get the random one


  // need to loop => the number of times the user requested for a length of a password!

  // this function must RETURN the generated password as a string

}