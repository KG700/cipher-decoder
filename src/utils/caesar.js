import { alphabet, isUpperCase } from "./helpers.js";

const caesarShiftInput = document.getElementById("caesar-shift");
const textToCodeInput = document.getElementById("text-to-code");

caesarShiftInput.addEventListener("input", () => displayCaesar());

const ceasarCipher = (text, shift = 1) => {
  const codeMap = {};

  alphabet.map((letter, i) => {
    codeMap[letter] = String.fromCharCode(((i + shift) % 26) + 65);
  });

  let codedText = [...text].map((letter) => {
    const validLetter = /[a-zA-z]/;

    if (!validLetter.test(letter)) return letter;
    const capitalLetter = letter.toUpperCase();
    let cipherLetter = codeMap[capitalLetter];
    cipherLetter = isUpperCase(letter)
      ? cipherLetter
      : cipherLetter.toLowerCase();
    return cipherLetter;
  });

  return codedText.join("");
};

export const displayCaesar = () => {
  const shift = parseInt(caesarShiftInput.value);
  document.getElementById("caesar-coded").innerText = ceasarCipher(
    textToCodeInput.value,
    shift
  );
};
