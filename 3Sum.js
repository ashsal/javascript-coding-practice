var threeSum = function (nums) {
  const results = [];
  const uniqueSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let zeroTriplet = [nums[i], nums[j], nums[k]];
          zeroTriplet = zeroTriplet.sort();
          let key = `${zeroTriplet[0]}+${zeroTriplet[1]}+${zeroTriplet[2]}`;
          if (!uniqueSet.has(key)) {
            uniqueSet.add(key);
            results.push(zeroTriplet);
          }
        }
      }
    }
  }

  return results;
};

console.log("[-1,0,1,2,-1,-4]", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("[0,1,1]", threeSum([0, 1, 1]));
console.log("[0,0,0]", threeSum([0, 0, 0]));
