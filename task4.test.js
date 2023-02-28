const makeUppercase = require("./task4")

function isUppercase(word) {
  return /^\p{Lu}/u.test(word);
}

it("isUppercase", () => {
    expect(isUppercase(makeUppercase("string"))).toBe(true)
})