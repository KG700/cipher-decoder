import dayjs from "dayjs";
import { displayCaesar } from "./src/utils/caesar.js";
import { displayRot13 } from "./src/utils/rot13.js";
import { displayVigenere } from "./src/utils/vigenere.js";

export const textToCodeInput = document.getElementById("text-to-code");
const now = dayjs();

textToCodeInput.addEventListener("input", () => {
  displayCaesar();
  displayRot13();
  displayVigenere();
});

document.getElementById("todays-date").innerText =
  now.format("DD/MM/YYYY HH:mm");
