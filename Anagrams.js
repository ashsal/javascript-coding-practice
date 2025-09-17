function areAnagrams(s1, s2) {
  // validate that s1 and s2 are valid strings
  if (s1.length !== s2.length) {
    return false;
  }

  const s1cleaned = s1.toLowerCase();
  const s2cleaned = s2.toLowerCase();

  const charsInS1 = {};
  for (let char of s1cleaned) {
    if (!charsInS1[char]) {
      charsInS1[char] = 0;
    }
    charsInS1[char] = charsInS1[char] + 1;
  }

  console.log(charsInS1);

  const charsInS2 = {};
  for (let char of s2cleaned) {
    if (!charsInS2[char]) {
      charsInS2[char] = 0;
    }
    charsInS2[char] = charsInS2[char] + 1;
  }
  console.log(charsInS2);
  for (let key in charsInS1) {
    if (charsInS1[key] !== charsInS2[key]) {
      return false;
    }
  }

  return true;
}

console.log("spool", "pools", areAnagrams("spool", "pools"));
console.log("ashish", "saluja", areAnagrams("ashish", "saluja"));
console.log("elbow", "below", areAnagrams("elbow", "below"));
