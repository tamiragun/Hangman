/*Programme that converts the dictionary.txt file to an array of strings. */

const fs = require("fs");
const text = fs.readFileSync("./assets/dictionary.txt", "utf-8");
const textByLine = text.split("\n");
console.log(textByLine.length);
const filteredList = textByLine.filter(
  (word) => word.length >= 4 && word.length <= 10
);

// Write data in 'Output.txt'
// fs.writeFile("DictionaryAsArray.txt", data, (err) => {
//   // In case of a error throw err.
//   if (err) throw err;
// });
