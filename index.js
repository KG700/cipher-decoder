import dayjs from "dayjs";

const textToCode = document.getElementById("text-to-code");
const now = dayjs();
textToCode.addEventListener("input", () => {
  document.getElementById("caesar-coded").innerText = textToCode.value;
});

document.getElementById("todays-date").innerText =
  now.format("DD/MM/YYYY HH:mm");
