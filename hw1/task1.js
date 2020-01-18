const max = (arr, num) => {
  const sort = arr.sort((a, b) => a - b);

  const sumOfArr = arr => {
    const sum = arr.reduce((a, b) => a + b);
    return sum;
  };

  for (let i = 0; i < sort.length; i += 1) {
    const sum = sumOfArr(sort);
    if (sum > num) {
      sort.pop();
    }
  }
  return sort.length;
};

console.log(
  max([1, 2], 7),
  max([1, 2, 10, 1], 2),
  max([1, 2, 3, 4], 7),
  max([3, 7, 2, 9, 4], 15)
);
