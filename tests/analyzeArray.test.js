import analyzeArray from "../functions/analyzeArray";

describe("Analyze array function", () => {
  const resultObject = analyzeArray([1,6]);
  test("Average", () => {
    expect(resultObject.average).toBeCloseTo(3.5);
  });
  test("Min", () => {
    expect(resultObject.min).toBe(1);
  });
  test("Max", () => {
    expect(resultObject.max).toBe(6);
  })
  test("Length", () => {
    expect(resultObject.length).toBe(2);
  })
});
