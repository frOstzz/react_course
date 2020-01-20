const short = nums => {
  const splitToSequences = nums => {
    const newArr = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + 1 !== nums[i + 1]) {
        newArr.push(nums.splice(0, i + 1));
        i = -1;
      }
    }

    return newArr;
  };
  const sequenceArr = splitToSequences(nums);

  const shortNumbers = sequenceArr.map(el => {
    if (el.length > 2) {
      return el[0] + "-" + el[el.length - 1];
    }

    return el;
  });

  return String(shortNumbers);
};

console.log(
  short([1, 2, 3, 4, 5, 6]),
  short([1, 2, 3, 5, 6, 8]),
  short([-3, -2, -1, 1, 2, 3])
);
