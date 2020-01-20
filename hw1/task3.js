const longestPalindrome = str => {
  const wordArr = str.split("");
  const reverseWordArr = str.split("").reverse();
  const newArr = [];

  for (let i = 0; i < wordArr.length; i += 1) {
    if (wordArr[i] !== reverseWordArr[i]) {
      wordArr.pop(wordArr[i]);
    } else {
      newArr.push(wordArr[i]);
    }
  }
  return newArr.join("");
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("dbabddb"));
