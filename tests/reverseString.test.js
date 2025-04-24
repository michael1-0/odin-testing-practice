import reverseString from "../functions/reverseString";

describe("Reverse function", () => {
  test("Handles normal string", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
  test("Handles numbers", () => {
    expect(reverseString("123Hello")).toBe("olleH321");
  });
  test("Handles invalid values", () => {
    expect(reverseString(null)).toBe(null);
    expect(reverseString(undefined)).toBe(undefined);
    expect(reverseString(0)).toBe(0);
  })
});
