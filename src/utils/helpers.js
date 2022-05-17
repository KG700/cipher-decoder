export const alphabet = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 65)
);

export let alphabetIndexMap = (() => {
  let indexMap = {};
  alphabet.forEach((letter, index) => {
    indexMap[letter] = index;
  });
  return indexMap;
})();

export const isUpperCase = (char) => char === char.toUpperCase();

export const cipher = (letter, encoding = true, shift) => {
  const validLetter = /[a-zA-z]/;
  const validShift = /^\d+$/;
  if (!validShift.test(shift)) return letter;
  if (!validLetter.test(letter)) return letter;

  const capitalLetter = letter.toUpperCase();
  const shiftDirection = encoding ? 1 : -1;
  const letterShift =
    (26 + alphabetIndexMap[capitalLetter] + shift * shiftDirection) % 26;
  let cipherLetter = alphabet[letterShift];
  return isUpperCase(letter) ? cipherLetter : cipherLetter.toLowerCase();
};

export const switchLabel = (labelId, encoding) => {
  document.getElementById(labelId).innerText = encoding
    ? "Encoding"
    : "Decoding";
};
