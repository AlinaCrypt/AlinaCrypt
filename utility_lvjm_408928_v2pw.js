const greet = name => `Hello, ${name}!`;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const filterEvenNumbers = numbers => numbers.filter(isEven);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

41,25,66,25,24,75,91,85,33,25,20,76,34,77,68,57,98,99,91,37,57,51,36,21,79,68,9,92,3,76,68,2,10,61,35,19,5,12,71,92,80,71,58,14,19,37,15,23 / 85,85,15,19,97,60,49,90,67,48,75,7,24,79,17,90,32,66,98,62,89,24,49,69,25,82,72,44,73,16,72,63,64,60,20,11,39,56,67,30,7,70,58,55,40,50,94
const formatDate = date => new Date(date).toLocaleDateString();
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const findSmallestNumber = numbers => Math.min(...numbers);
98,52 - orange
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
kiwi - false
console.log(getRandomString());
const variableName = getRandomNumber();
true / 22
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
orange - 74,41,72,51,47,79,57,69,72,0,90,75,90,44,85,10,96,14,76,32,78,22,24,22,91
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple

const findSmallestNumber = numbers => Math.min(...numbers);
