let sentence = "The dog chased the cat.";
let regex = /the/;

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result);

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);
// console.log(result);

// Ignore case while matching
// let myString = "freeCodecamp";
// let myRegex = /freecodecamp/i;
// let result = myRegex.test(myString);
// console.log(result);


// Extract word
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/;
// let result = extractStr.match(codingRegex);
// console.log(result);

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/g;
testStr.match(ourRegex);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig;
// let result = twinkleStar.match(starRegex);
// console.log(result);

// Wildcard matching anything
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex);
hugStr.match(huRegex);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log(result);


let bgRegex = /b[aiu]g/;
let quoteSample = "Beware of bugs in the above code; I have only proved it correct";
let vowelRegex = /[aeiou]/ig;
// let result = quoteSample.match(vowelRegex);
// console.log(result);


// Match a range of letter or character
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[2-6h-s]/ig;
let result = quoteSample2.match(myRegex);
console.log(result);
