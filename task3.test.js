const Calculator = require("./task3");

describe("Calculator", () => {
    test("add 2 to 3 equals 5", () => {
        expect(Calculator.add(3,2)).toBe(5);
    })

    test("substract 2 from 3 equals 1", () => {
        expect(Calculator.substract(3,2)).toBe(1);
    })

    test("divide 4 by 2 equals 2", () => {
        expect(Calculator.divide(4,2)).toBe(2);
    })

    test("divide 4 by 0 equals Cannot", () => {
        expect(Calculator.divide(4,0)).toBe("Cannot");
    })

    test("divide 4 by 2 equals 8", () => {
        expect(Calculator.multiply(4,2)).toBe(8);
    })
})