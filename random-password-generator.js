function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  
    const allChars = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    return password;
  }
  
  // Test the function to generate a password of length 12
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  