function countWord(sentence) {
  // Validate that sentence is a string

  if (sentence.length === 0) {
    return 0;
  }

  const sentenceCleaned = sentence.trim();

  let countOfWords = 1;
  for (let i = 0; i < sentenceCleaned.length; i++) {
    if (sentenceCleaned[i] === " " && sentenceCleaned[i + 1] !== " ") {
      countOfWords++;
    }
  }

  return countOfWords;
}

function countWord2(sentence) {
  // validation
  const sentenceCleaned = sentence.trim();
  const splittedString = sentenceCleaned.split(" ");
  console.log(splittedString);

  const nonEmptyStrings = splittedString.filter((s) => s != "");

  return nonEmptyStrings.length;
}

console.log("this is my sentence", countWord("this is my sentence"));
console.log("what is the date today", countWord("what is the date today"));

console.log(
  " what is the   date tomorrow ",
  countWord(" what is the   date tomorrow ")
);

console.log("", countWord(""));

console.log("countWord2");
console.log("this is my sentence", countWord2("this is my sentence"));

console.log(
  " what is the   date tomorrow ",
  countWord2(" what is the   date tomorrow ")
);
