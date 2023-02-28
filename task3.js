const Calculator = {
  add(a, b) {
    return a + b;
  },

  substract(a, b) {
    return a - b;
  },

  divide(a, b) {
    if (b === 0) return "Cannot";
    else return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

module.exports = Calculator;
