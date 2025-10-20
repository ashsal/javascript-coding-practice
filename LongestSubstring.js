var lengthOfLongestSubstring = function (inputString) {
  let longestSubstring = "";
  for (let i = 0; i < inputString.length; i++) {
    for (let j = i + 1; j <= inputString.length; j++) {
      const substring = inputString.slice(i, j);

      const splittedSubstring = substring.split("");
      const charMap = new Map();

      splittedSubstring.forEach((char) => {
        if (!charMap.has(char)) {
          charMap.set(char, 0);
        }

        charMap.set(char, charMap.get(char) + 1);
      });

      let skip = false;
      for (let [key, value] of charMap.entries()) {
        if (value > 1) {
          skip = true;
          break;
        }
      }

      if (!skip && longestSubstring.length < substring.length) {
        longestSubstring = substring;
      }
    }
  }

  //return { longestSubstring, longestSubstringLength: longestSubstring.length };
  return longestSubstring.length;

  /*
        1. Find all substrings
        2. Find the longest substring
        3. Find the longest substring with unique chars
    */
};

console.log("ashish", lengthOfLongestSubstring("ashish"));
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb"));
console.log("bbbbb", lengthOfLongestSubstring("bbbbb"));
console.log("pwwkew", lengthOfLongestSubstring("pwwkew"));
