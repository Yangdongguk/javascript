setInterval(() => {
  const date = new Date();
  const time = date.toISOString().split("T")[1];
  const timeTag = document.querySelector(".time");
  timeTag.innerText = time;
}, 1000);
