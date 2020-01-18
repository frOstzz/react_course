const missed = arr => {
  const sort = arr.sort((a, b) => a - b);

  const createArrWithAllElems = arr => {
    const newArr = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i += 1) {
      newArr.push(i);
    }
    return newArr;
  };

  const arrWithAllElems = createArrWithAllElems(sort);

  const sumSortArr = sort.reduce((a, b) => {
    return a + b;
  });

  const sumArr = arrWithAllElems.reduce((a, b) => {
    return a + b;
  });
  return sumArr - sumSortArr;
};

console.log(missed([0, 1, 3]), missed([-2, 0, 1, 2]), missed([1, 3, 2, -1]));
