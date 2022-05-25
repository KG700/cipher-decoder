import dayjs from "dayjs";

export const updateTime = () => {
  console.log("updating time..");
  document.getElementById("todays-date").innerText =
    dayjs().format("DD/MM/YYYY HH:mm");

  setTimeout(updateTime, 1000);
};
