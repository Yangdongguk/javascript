// Counter -10 ~ 10
// [10, -10]: Red 그 외는 Black

const minus = document.querySelector(".minus");
const Counter = document.querySelector(".Counter");
const plus = document.querySelector(".plus");

plus.addEventListener("click", () => {
  const num = Number(Counter.innerText);
  const newNum = num < 10 ? num + 1 : num;
  Counter.innerText = newNum;
  Counter.style.color = newNum == 10 ? "red" : "black";
});
minus.addEventListener("click", () => {
  const num = Number(Counter.innerText);
  const newNum = num < -10 ? num - 1 : num;
  Counter.innerText = newNum;
  Counter.style.color = newNum == -10 ? "red" : "black";
});
