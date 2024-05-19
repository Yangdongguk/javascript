// const a = document.querySelector(".box");
// console.log(a);

// const b = document.getElementsByClassName("box");

// const plus = document.querySelector(".plus");
// plus.addEventListener("click", () => {
//   const num = document.querySelector(".num");
//   num.innerText = Number(num.innerText) + 1;
// });

// const minus = document.querySelector(".minus");
// minus.addEventListener("click", () => {
//   const num = document.querySelector(".num");
//   const number = Number(num.innerText) - 1;
//   num.innerText = num.innerText === -1 ? 0 : number;
// });

const Xmark = document.createElement(".Xmark");
const bar = document.createElement(".bar");
Xmark.style.display = "none";

Xmark.addEventListener("click", () => {
  bar.style.display = "block";
  Xmark.style.display = "none";
});

bar.addEventListener("click", () => {
  Xmark.style.display = "block";
  bar.style.display = "none";
});
