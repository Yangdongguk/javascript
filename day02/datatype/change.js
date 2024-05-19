// div: w 100 h 100 bg: 좋아하는거
// -, +로 통해서
// div가 유동적으로 넓/높이가 변하도록 하는 프로그램을 만드세요

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = "black";
document.body.appendChild(div);

const plus = document.createElement("button");
plus.innerText = `+`;

const minus = document.createElement("button");
minus.innerText = `-`;

plus.addEventListener("click", () => {
  div.style.width = parseInt(div.style.width) + 1 + "px";
  div.style.height = parseInt(div.style.height) + 1 + "px";
});
minus.addEventListener("click", () => {
  div.style.width = parseInt(div.style.width) - 1 + "px";
  div.style.height = parseInt(div.style.height) - 1 + "px";
});

document.body.appendChild(plus);
document.body.appendChild(minus);
