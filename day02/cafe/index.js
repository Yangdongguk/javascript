// 아메리카노 2500: 수량 - 0 +
// 라떼 3000: - 0 +
// 바닐라  3500: - 0 +

// 총액: 0

const coffe = document.createElement("span");
const plus = document.createElement("button");
const num = document.createElement("span");
const minus = document.createElement("button");

coffe.innerText = "아메리카노 2500 : ";

plus.innerText = `+`;

// num.innerText`0`;

minus.innerText = `-`;

// plus.addEventListener("click", () => {
//   num.innerText = Number(num.innerText) + 1;
// });
// minus.addEventListener("click", () => {
//   num.innerText = Number(num.innerText) - 1;
// });

document.body.appendChild(coffe);
document.body.appendChild(plus);
document.body.appendChild(minus);

document.body.appendChild(latte);
document.body.appendChild(vanilla);
// document.body.appendChild(num);
