/*
Задачи:
1. Сортировка массива для того, чтобы цены шли по возрастающей.
2. Сложение элементов массива, чтобы понять общую стоимость
3. Если элемент "куплен" выкидываем его из массива 
*/

const max = (arr, num) => {
  const sortedArr = arr => {
    const sorted = arr.sort();
    return sorted;
  };

  const sumOfArr = arr => {
    const sum = arr.reduce((a, b) => a + b);
    return sum;
  };

  const sortArr = sortedArr(arr);
  const sum = sumOfArr(sortArr);

  for (let i = 0; i < sortArr.length; i += 1) {
    if (sum > num) {
      sortArr.pop();
    }
  }
  return sortArr.length;
};

console.log(
  max([1, 2], 7),
  max([1, 2, 10, 1], 2),
  max([1, 2, 3, 4], 7),
  max([3, 7, 2, 9, 4], 15)
);
