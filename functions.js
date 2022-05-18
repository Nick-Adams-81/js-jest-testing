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

    subtract: (a, b) => a - b 

}

module.exports = functions