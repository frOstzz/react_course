const largestN = (arr, num) => {
  return arr.sort((a, b) => b - a)[num - 1];
};

console.log(
  largestN([2, 4, 1, 5, 3], 1),
  largestN([2, 4, 1, 5, 3], 2),
  largestN([1, 8, 3, 2], 4)
);
