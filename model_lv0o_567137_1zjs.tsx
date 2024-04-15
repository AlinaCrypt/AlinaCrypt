banana

const capitalizeString = str => str.toUpperCase();
kiwi

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const squareRoot = num => Math.sqrt(num);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

false / false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
9 * kiwi
const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

false - false

class MyClass { constructor() { this.property = getRandomString(); } }
kiwi / 47
const reverseWords = str => str.split(" ").reverse().join(" ");
false / true
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
grape

const findLargestNumber = numbers => Math.max(...numbers);
