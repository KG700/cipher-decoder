import { switchLabel } from "./helpers.js";
import { ceasarCipher } from "./caesar";
import { textToCodeInput } from "../../index.js";

let isRot13Encoding = true;

const rot13EncodeSwitch = document.querySelector(
  "input[name=rot13-encode-switch]"
);

rot13EncodeSwitch.addEventListener("change", () => {
  isRot13Encoding = !isRot13Encoding;
  switchLabel("rot13-switch-label", isRot13Encoding);
  displayRot13();
});

const rot13Cipher = (text, encoding) => {
  return ceasarCipher(text, encoding, 13);
};

export const displayRot13 = () => {
  document.getElementById("rot13-coded").innerText = rot13Cipher(
    textToCodeInput.value,
    isRot13Encoding
  );
};
