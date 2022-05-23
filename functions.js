// functions object
const axios = require("axios")

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstname: "Nick",
            lastname: "Adams"
        }

        return user
    },

    usernames: ["Nick", "Dave", "admin"],

    fetchUser: () =>
        axios
            .get("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.data)
            .catch(err => console.log(err)),

    subtract: (a, b) => a - b,
    reverseString: (str) => str.split("").reverse().join(""),
    removeVowels: (str) => str.replace(/[aeiou]/ig, ""),
    isPalindrome: (str) => str === str.split("").reverse().join(""),

    user: {
        name: "Nick Adams",
        address: "3403 McNeil sstreet",
        city: "Dallas",
        state: "Texas",
        zip: "75227",
        jobs: ["software engineer", "poker dealer"]
    },

    fibonachi: (n) => {
        let a = 0
        let b = 1
        for (let i = 0; i < n; i++) {
            let x = a
            a = b
            b = b + x
        }

        return a
    },

    countVowels: (str) => {
        let count = str.match(/[aeiou]/ig).length
        return count
    }


}

module.exports = functions