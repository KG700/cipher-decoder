import { displayCaesar } from "./src/utils/caesar.js";
import { displayRot13 } from "./src/utils/rot13.js";
import { displayVigenere } from "./src/utils/vigenere.js";
import { getQuotes, updateQuote } from "./src/utils/quotes.js";
import { updateTime } from "./src/utils/time.js";
import "regenerator-runtime/runtime";

export const textToCodeInput = document.getElementById("text-to-code");

textToCodeInput.addEventListener("input", () => {
  displayCaesar();
  displayRot13();
  displayVigenere();
});

(async () => {
  const quotes = await getQuotes();
  updateQuote(quotes);
  updateTime();
})();
