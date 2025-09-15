
// Pretty simple, write a function called `reverseString` that returns its input, reversed!

// ```javascript
// reverseString('hello there') // returns 'ereht olleh'

const reverseString = function(string){
    const newArray = string.split("").reverse().join("");
    return newArray;
}
console.log(reverseString("hello"));
// Do not edit below this line
module.exports = reverseString;
