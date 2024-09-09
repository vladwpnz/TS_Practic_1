// Basic math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// String manipulation
function reverseString(str) {
    return str.split('').reverse().join('');
}

function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Array operations
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Object manipulation
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    },
    updateAge: function (newAge) {
        this.age = newAge;
    }
};

// Loop examples
function printNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}

function printEvenNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Random number generation
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Boolean operations
function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

// Working with dates
function getCurrentDate() {
    return new Date().toDateString();
}

function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

// Callback functions
function performOperation(a, b, callback) {
    return callback(a, b);
}

// Array filtering
function filterOddNumbers(arr) {
    return arr.filter(isOdd);
}

function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}

// Array mapping
function squareNumbers(arr) {
    return arr.map(num => num * num);
}

// Basic recursion
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Higher-order functions
function higherOrderFunction(func) {
    console.log('Before executing function');
    func();
    console.log('After executing function');
}

function sayHello() {
    console.log('Hello!');
}

// Simple counter closure
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

// Event handling (if used in a browser)
function handleClick() {
    console.log('Button clicked!');
}

// Fibonacci sequence
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Sorting an array
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// Finding the longest word in a string
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

// Palindrome check
function isPalindrome(str) {
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanedString === cleanedString.split('').reverse().join('');
}

// Prime number check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Finding primes up to a limit
function findPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Flattening a 2D array
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}

// Working with objects
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    honk: function () {
        return 'Beep beep!';
    },
    start: function () {
        return 'Car started!';
    }
};

function describeCar(car) {
    return `${car.year} ${car.make} ${car.model}`;
}

// Arrow functions
const multiplyByTwo = (num) => num * 2;

const greetPerson = (name) => `Hello, ${name}!`;

// Working with sets
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5, 5]);

function addToSet(set, value) {
    set.add(value);
    return set;
}

// Working with maps
const ages = new Map();
ages.set('John', 25);
ages.set('Jane', 30);

function getAge(name) {
    return ages.get(name);
}

// More array operations
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function countOccurrences(arr, value) {
    return arr.reduce((count, current) => current === value ? count + 1 : count, 0);
}

// JSON operations
const jsonString = '{"name": "John", "age": 30}';

function parseJson(jsonString) {
    return JSON.parse(jsonString);
}

function stringifyObject(obj) {
    return JSON.stringify(obj);
}

// Template literals
function createGreeting(name) {
    return `Hello, ${name}, welcome to the platform!`;
}

// Spread operator
const defaultSettings = { theme: 'dark', notifications: true };
const userSettings = { notifications: false };
const finalSettings = { ...defaultSettings, ...userSettings };
