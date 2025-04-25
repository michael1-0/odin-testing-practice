import caesarCipher from "../functions/caesarCipher";

describe("Caesar Cipher function", () => {
  test("works with lowercase", () => {
    expect(caesarCipher("abcd", 3)).toBe("defg");
  });
  test("Works with uppercase and lowercase", () => {
    expect(caesarCipher("abCD", 3)).toBe("deFG");
  });
  test("Works with numbers not encrypted", () => {
    expect(caesarCipher("abCD213", 3)).toBe("deFG213");
  });
  test("Works with punctuations and spaces", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
