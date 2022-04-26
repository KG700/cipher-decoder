import dayjs from "dayjs";
import { displayCaesar } from "./src/utils/caesar.js";

const textToCodeInput = document.getElementById("text-to-code");
const now = dayjs();

textToCodeInput.addEventListener("input", () => displayCaesar());

document.getElementById("todays-date").innerText =
  now.format("DD/MM/YYYY HH:mm");
