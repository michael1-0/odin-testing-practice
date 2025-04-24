import capitalize from "../functions/capitalize";

describe("Capitalize function", () => {
  test("Capitalizes first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("Handles an empty string", () => {
    expect(capitalize("")).toBe("");
  });
  test("Handles a numbers within the string", () => {
    expect(capitalize("14llo")).toBe("14Llo");
  });
  test("Handles a space for the first character", () => {
    expect(capitalize(" mikul")).toBe(" Mikul");
  });
  test("Handles string with mixed case", () => {
    expect(capitalize("eLlo")).toBe("ELlo");
  });
  test("Handles symbols", () => {
    expect(capitalize("#$!#@")).toBe("#$!#@");
  })
});
