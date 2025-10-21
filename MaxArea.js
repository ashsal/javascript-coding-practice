var maxArea = function (height) {
  //console.log(height);
  let maxArea = 0;
  for (i = 0; i < height.length; i++) {
    for (j = i + 1; j < height.length; j++) {
      const minHeight = height[i] > height[j] ? height[j] : height[i];
      const area = minHeight * (j - i);
      if (maxArea < area) {
        maxArea = area;
      }
    }
  }

  return maxArea;
};

console.log("1, 8, 6, 2, 5, 4, 8, 3, 7", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log("1,1", maxArea([1, 1]));
