const fruits = ["사과", "오렌지", "파인애플", "키위", "망고", "아보카도"];

// 사과 버튼
// 오렌지 버튼
// 파인애플 버튼
// ...

// const appleBtn = document.createElement("button");
// const orangeBtn = document.createElement("button");
// const pinappleBtn = document.createElement("button");
// const kiwiBtn = document.createElement("button");
// const mangoBtn = document.createElement("button");
// const abokadoBtn = document.createElement("button");

// appleBtn.innerText = "사과 버튼";
// orangeBtn.innerText = "오렌지 버튼";
// pinappleBtn.innerText = "파인애플 버튼";
// kiwiBtn.innerText = "키위 버튼";
// mangoBtn.innerText = "망고 버튼";
// abokadoBtn.innerText = "아보카도 버튼";

// appleBtn.addEventListener("click", (v) => {
//   console.log("사과가 선택되었습니다.");
// });

// orangeBtn.addEventListener("click", () => {
//   console.log("오렌지가 선택되었습니다.");
// });

// pinappleBtn.addEventListener("click", () => {
//   console.log("파인애플이 선택되었습니다.");
// });

// kiwiBtn.addEventListener("click", () => {
//   console.log("키위가 선택되었습니다.");
// });

// mangoBtn.addEventListener("click", () => {
//   console.log("망고가 선택되었습니다.");
// });

// abokadoBtn.addEventListener("click", () => {
//   console.log("아보카도가 선택되었습니다.");
// });

// document.body.appendChild(appleBtn);
// document.body.appendChild(orangeBtn);
// document.body.appendChild(pinappleBtn);
// document.body.appendChild(kiwiBtn);
// document.body.appendChild(mangoBtn);
// document.body.appendChild(abokadoBtn);

// fruits.forEach((v) => {
//   btn = document.createElement("button");
//   btn.innerText = v;
//   btn.addEventListener("click", () => {
//     window.alert(`${v}과일이 클릭되었습니다.`);
//   });
//   document.body.appendChild(btn);
// });

const coffee = ["아메리카노 3000", "라떼 4000", "바닐라 5000"];

coffee.forEach((v) => {
  const btn = document.createElement("button");
  btn.innerText = v;
  btn.addEventListener("mouseenter", () => {
    const total = document.querySelector(".total");
    const price = Number(v.split(" ")[1]);
    total.innerText = Number(total.innerText) + price;
  });
  document.body.appendChild(btn);
});
