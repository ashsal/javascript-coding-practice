function mergeSort(nums1, nums2) {
  let i = 0,
    j = 0;
  const mergedArray = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }

  return mergedArray;
}

var findMedianSortedArrays = function (nums1, nums2) {
  //const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const mergedArray = mergeSort(nums1, nums2);
  //console.log(mergedArray, mergedArray1);
  if (mergedArray.length % 2 === 0) {
    const index = mergedArray.length / 2 - 1;
    const firstValue = mergedArray[index];
    const secondValue = mergedArray[index + 1];

    return (firstValue + secondValue) / 2;
  } else {
    const index = Math.floor(mergedArray.length / 2);
    return mergedArray[index];
  }
};

//findMedianSortedArrays([1, 3], [2]);
console.log("[1, 2], [3, 4]", findMedianSortedArrays([1, 2], [3, 4]));
console.log("[1, 3], [2]", findMedianSortedArrays([1, 3], [2]));
