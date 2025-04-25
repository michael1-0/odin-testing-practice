export default function caesarCipher(plainText, shiftFactor) {
  const encryptor = generateEncryptor(shiftFactor);
  const cipherText = generateCipherText(encryptor, plainText);

  return cipherText;
}

function generateCipherText(encryptor, plainText) {
  let cipherText = "";

  for (let i = 0; i < plainText.length; i++) {
    const charToBeEncrypted = plainText.charAt(i);

    if (charToBeEncrypted.search(/[\p{P}\p{S}\s0-9]/gu) !== -1) {
      cipherText += charToBeEncrypted;
      continue;
    }

    cipherText += encryptor[charToBeEncrypted];
  }

  return cipherText;
}

function generateEncryptor(shiftFactor) {
  const map = {
    a: undefined,
    b: undefined,
    c: undefined,
    d: undefined,
    e: undefined,
    f: undefined,
    g: undefined,
    h: undefined,
    i: undefined,
    j: undefined,
    k: undefined,
    l: undefined,
    m: undefined,
    n: undefined,
    o: undefined,
    p: undefined,
    q: undefined,
    r: undefined,
    s: undefined,
    t: undefined,
    u: undefined,
    v: undefined,
    w: undefined,
    x: undefined,
    y: undefined,
    z: undefined,
    A: undefined,
    B: undefined,
    C: undefined,
    D: undefined,
    E: undefined,
    F: undefined,
    G: undefined,
    H: undefined,
    I: undefined,
    J: undefined,
    K: undefined,
    L: undefined,
    M: undefined,
    N: undefined,
    O: undefined,
    P: undefined,
    Q: undefined,
    R: undefined,
    S: undefined,
    T: undefined,
    U: undefined,
    V: undefined,
    W: undefined,
    X: undefined,
    Y: undefined,
    Z: undefined,
  };
  let startingCharCode = 97 + shiftFactor;
  let counter = 0;

  Object.keys(map).forEach((key) => {
    if (counter === 26) {
      return;
    }
    if (startingCharCode === 123) {
      startingCharCode = 97;
    }

    map[key] = String.fromCharCode(startingCharCode);
    map[String.fromCharCode(key.charCodeAt(0) - 32)] = String.fromCharCode(
      startingCharCode - 32
    );

    startingCharCode++;
    counter++;
  });

  return map;
}
