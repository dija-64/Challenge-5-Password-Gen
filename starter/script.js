function generateRandomPassword() {
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
  var numericCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Array of uppercase characters to be included in password
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  // Function to prompt user for password length check
  let passwordLength = parseInt(prompt("How many characters long would you like your password to be? Must be between 8-128 characters."));

  if (isNaN(passwordLength)) {
    alert("Please input number indicating desired password length.");
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 - 128 characters long. Please input number indicating desired password length.");
    return;
  }



  // Prompt for charater types in password
  const addSpecialChar = confirm("Would you like to include special characters in your password?");
  const addNumbers = confirm("Would you like to include numeric characters in your password?");
  const addLowercase = confirm("Would you like to include lowercase letters in your password?");
  const addUppercase = confirm("Would you like to include uppercase letters in your password?");

  if (!addSpecialChar && !addNumbers && !addLowercase && !addUppercase) {
    alert("Please select at least one type of character for your password.");
    return;
  }

  let allChars = " ";
  if (addSpecialChar) allChars += specialCharacters;
  if (addNumbers) allChars += numericCharacters;
  if (addLowercase) allChars += lowerCasedCharacters;
  if (addUppercase) allChars += upperCasedCharacters;


  let newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    newPassword += allChars.charAt(randomIndex);
  }

  return newPassword;


}

const genPassword = generateRandomPassword();
if (genPassword) {
  alert("Your new, randomly generated password is: " + genPassword)

}


// Add event listener to generate button
var generateBtn = document.getElementById('generate').addEventListener('click', generateRandomPassword);