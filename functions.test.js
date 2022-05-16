const functions = require("./functions")

test("adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4)
}) 

test("adds 2 + 2 to not equal 5", () => {
    expect(functions.add(2, 2,)).not.toBe(5)
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
