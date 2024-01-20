function generatePassword() {
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


  // Function to prompt user for password options
  function getPasswordOptions() {
    var passwordLength = parseInt(prompt("Enter password. Your password must be between 8 - 128 characters long:"));
    if (isNaN(passwordLength)) {
      alert("Please input a password.");
      return;
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 - 128 characters long.");
      return;
    };
  }


  // Prompt for charater types in password
  const addSpecialChar = confirm("Would you like to include special characters?");
  const addNumbers = confirm("Would you like to include numeric characters?");
  const addLowercase = confirm("Would you like to include lowercase letters?");
  const addUppercase = confirm("Would you like to include uppercase letters?");

  if (!addSpecialChar && !addNumbers && !addLowercase && !addUppercase) {
    alert("Please select at least one type of character.");
    return;
  }

  let allChars = " ";
  if (addSpecialChar) allChars += specialCharacters;
  if (addNumbers) allChars += numericCharacters
  if (addLowercase) allChars += lowerCasedCharacters
  if (addUppercase) allChars += upperCasedCharacters


  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    if (password) {
      passwordText.value = password;
    } else {
      passwordText.value = " ";
    }
  }

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);