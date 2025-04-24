import Calculator from "../classes/Calculator";

describe("Calculator Object", () => {
  const calculatorObject = new Calculator(1, 2);
  test("Addition", () => {
    expect(calculatorObject.add()).toBeCloseTo(3);
  });
  test("Subtraction", () => {
    expect(calculatorObject.subtract()).toBeCloseTo(-1);
  });
  test("Division", () => {
    expect(calculatorObject.divide()).toBeCloseTo(0.5);
  });
  test("Multiplication", () => {
    expect(calculatorObject.multiply()).toBeCloseTo(2);
  });
});
