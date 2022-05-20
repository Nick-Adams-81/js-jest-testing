const functions = require("./functions")


console.log(functions.add(50, 23))
console.log(functions.subtract(9, 3))
console.log(functions.isPalindrome("bob"))
console.log(functions.reverseString("hello world"))


for(let i = 0; i < 10; i++) {
    console.log(functions.fibonachi(i))
}