const { default: expect } = require("expect")
const reverseStr = require("./task2")

it("Reverse", () => {
    expect(reverseStr("string")).toEqual("gnirts")
})