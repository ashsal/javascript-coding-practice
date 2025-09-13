const myString = "ashish";
console.log(myString[0]);
console.log(myString[myString.length - 1]);

function countVowelAndConsonant(inputString) {
  // Validate that inputString is a string and has length greater than zero
  let inputStringCleaned = inputString.toLowerCase();
  inputStringCleaned = inputStringCleaned.replace(/ /g, "");
  console.log(inputStringCleaned);
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let vowelsCount = 0;
  let consonantsCount = 0;
  for (let i = 0; i < inputStringCleaned.length; i++) {
    if (vowels.includes(inputStringCleaned[i])) {
      vowelsCount = vowelsCount + 1;
    } else if (consonants.includes(inputStringCleaned[i])) {
      consonantsCount++;
    } else {
      console.log(`${inputStringCleaned[i]} is neither vowel nor a consonant`);
    }
  }

  return { vowelsCount, consonantsCount };
}

console.log("Ashish Saluja", countVowelAndConsonant("Ashish Saluja"));
console.log("Hello World", countVowelAndConsonant("Hello World"));
console.log("Hello{}World", countVowelAndConsonant("Hello{}World"));
