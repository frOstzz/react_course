const matrix = [
  ["F", "A", "C", "E"],
  ["O", "B", "O", "P"],
  ["N", "A", "R", "B"],
  ["E", "A", "N", "D"]
];

const check = (arr, str) => {
  const horizontalWord = arr.map(el => el.join(""));

  const createVerticalMatrix = (arr, index) => {
    const vertical = arr.map(el => {
      for (let i = 0; i < el.length; i += 1) {
        return el[index];
      }
    });
    return vertical;
  };

  const reverseMatrix = [];
  for (let i = 0; i < arr.length; i += 1) {
    reverseMatrix.push(createVerticalMatrix(arr, i));
  }

  const verticalWord = reverseMatrix.map(el => el.join(""));

  const horizontal = horizontalWord.some(el => el.includes(str));
  const vertical = verticalWord.some(el => el.includes(str));

  return horizontal || vertical;
};

console.log(
  check(matrix, "FACE"),
  check(matrix, "CORN"),
  check(matrix, "AND"),
  check(matrix, "FONT")
);
