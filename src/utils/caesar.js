import { switchLabel, cipher } from "./helpers.js";
import { textToCodeInput } from "../../index.js";

const caesarShiftInput = document.getElementById("caesar-shift");
caesarShiftInput.addEventListener("input", () => displayCaesar());

let isCaesarEncoding = true;

const caesarEncodeSwitch = document.querySelector(
  "input[name=caesar-encode-switch]"
);

caesarEncodeSwitch.addEventListener("change", () => {
  isCaesarEncoding = !isCaesarEncoding;
  switchLabel("caesar-switch-label", isCaesarEncoding);
  displayCaesar();
});

export const ceasarCipher = (text, encoding = true, shift = 1) => {
  let codedText = [...text].map((letter) => {
    return cipher(letter, encoding, shift);
  });

  return codedText.join("");
};

export const displayCaesar = () => {
  const shift = parseInt(caesarShiftInput.value);
  document.getElementById("caesar-coded").innerText = ceasarCipher(
    textToCodeInput.value,
    isCaesarEncoding,
    shift
  );
};
