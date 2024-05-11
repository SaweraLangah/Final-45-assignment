"use strict";
//Assignment # 24
//Test for equality and inequality with strings
let string1 = "hello";
let string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
//Tests using the lower case funcation
let upperCase = "HELLO";
let lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
// Numerical tests involving equality and inequality, greater
//than and less than, greater than or equal to, and less than or equal to
let number1 = 10;
let number2 = 20;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
// Tests using "and" and "or" operators
let x = 10;
let y = 20;
let z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
//Test whether an item is in a array
let array1 = [1, 2, 3, 4, 5];
let itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
// Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true
