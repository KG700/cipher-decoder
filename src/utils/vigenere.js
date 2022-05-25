import { textToCodeInput } from "../../index.js";
import { cipher, alphabet, alphabetIndexMap, switchLabel } from "./helpers";

const vigenereKeywordInput = document.getElementById("vigenere-keyword");
vigenereKeywordInput.addEventListener("input", () => displayVigenere());

let isVigenereEncoding = true;

const vigenereEncodeSwitch = document.querySelector(
  "input[name=vigenere-encode-switch]"
);

vigenereEncodeSwitch.addEventListener("change", () => {
  isVigenereEncoding = !isVigenereEncoding;
  switchLabel("vigenere-switch-label", isVigenereEncoding);
  displayVigenere();
});

const vigenereCipher = (text, encoding = true, keyword = "") => {
  if (!keyword) return text;
  const keywordCaptialised = keyword.toUpperCase();
  const numKeywordLetters = keyword.length;

  let keywordIndex = 0;

  let codedText = [...text].map((letter) => {
    let keywordLetter = keywordCaptialised[keywordIndex];
    let keywordShift = alphabetIndexMap[keywordLetter];
    keywordIndex = (keywordIndex + 1) % numKeywordLetters;
    return cipher(letter, encoding, keywordShift);
  });
  return codedText.join("");
};

export const displayVigenere = () => {
  document.getElementById("vigenere-coded").innerText = vigenereCipher(
    textToCodeInput.value,
    isVigenereEncoding,
    vigenereKeywordInput.value
  );
};
