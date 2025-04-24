export default function reverseString(string) {
  if (typeof string !== "string") {
    return string;
  }

  const arrCharacters = string.split("");
  let reversedString = "";
  for (let i = arrCharacters.length - 1; i >= 0; i--) {
    reversedString = reversedString + arrCharacters[i];
  }
  return reversedString;
}
