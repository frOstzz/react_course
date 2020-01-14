const longest = string => {
  let allSymbols = string.split("");

  let uniqueSymbols = [];
  for (let i in allSymbols) {
    if (!uniqueSymbols.includes(allSymbols[i])) {
      uniqueSymbols.push(allSymbols[i]);
    }
  }
  return uniqueSymbols.join("");
};

console.log(
  longest("abcabcbb"),
  longest("ababcd"),
  longest("bbbb"),
  longest("bbbab")
);
