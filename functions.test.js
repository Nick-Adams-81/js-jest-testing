// imporing functions to be tested
const functions = require("./functions")

test("adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4)
}) 

test("adds 2 + 2 to not equal 5", () => {
    expect(functions.add(2, 2,)).not.toBe(5)
})

test("subtracts 5 from 10 to equal 5", () => {
    expect(functions.subtract(10, 5)).toBe(5)
})

test("should be null", () => {
    expect(functions.isNull()).toBeNull()
})

test("Should be falsy value", () => {
    expect(functions.checkValue(null)).toBeFalsy()
})

test("Should be truthy value", () => {
    expect(functions.checkValue(5)).toBeTruthy()
})

test("User should be Nick Adams object", () => {
    expect(functions.createUser()).toEqual({ firstname: "Nick", lastname: "Adams"})
})

test("should be under 1600", () => {
    const load1 = 800,load2 = 700
    expect(load1 + load2).toBeLessThan(1600)
})

test("there is no I in team", () => {
    expect("team").not.toMatch(/i/ig)
})

test("Admin should contain Admin", () => {
    expect(functions.usernames).toContain("admin")
})

test("should return olleh when hello is passed in", () => {
    expect(functions.reverseString("hello")).toEqual("olleh")
})

test("should return hll wrld when passed hello", () => {
    expect(functions.removeVowels("hello world")).toEqual("hll wrld")
})

test("Should return true when bob is passed in", () => {
    expect(functions.isPalindrome("bob")).toBe(true)
})

test("Should return name of Nick Adams", () => {
    expect(functions.user.name).toEqual("Nick Adams")
})

test("Should return city of Dallas", () => {
    expect(functions.user.city).toEqual("Dallas")
})

test("Should return 3 when passed hello world", () => {
    expect(functions.countVowels("hello world")).toEqual(3)
})

test("Should equal 9 when passed 5 and 4", () => {
    expect(functions.sum(5, 4)).toEqual(9)
})

test("should equal 15 when passed 4, 5, and 6", () => {
    expect(functions.sum(4, 5, 6)).toEqual(15)
})

test("should equal 25 when passed 3, 4, 5, 6, 7", () => {
    expect(functions.sum(3, 4, 5, 6, 7)).toEqual(25)
})


test("user fetched name should be Leanne Graham", () => {
    expect.assertions(1)
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })
})

