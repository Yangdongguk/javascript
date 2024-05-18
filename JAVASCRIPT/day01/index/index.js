// Event

// const button = document.createElement("button");
// button.innerText = "버튼";

// button.addEventListener("mouseover", () => {
//   console.log("마우스 올라감");
// });

// document.body.appendChild(button);

// div태그 - width: 100px, height: 100px, bg: red
//         - 클릭을 하면, bg: blue

// const divtag = document.createElement("div");
// divtag.style.width = "100px";
// divtag.style.height = "100px";
// divtag.style.backgroundColor = "red";

// divtag.addEventListener("click", () => {
//   divtag.style.backgroundColor = "blue";
// });

// document.body.appendChild(divtag);

// button 태그 만들고, '파란상자'
// event 클릭을 하면, html div w:100, h:100, bg:blue 생김

// const button = document.createElement("button");
// button.innerText = "파란상자";

// button.addEventListener("click", () => {
//   const div = document.createElement("div");
//   button.style.width = "100px";
//   button.style.height = "100px";
//   button.style.margin = "10px";
//   button.style.backgroundColor = "blue";
//   document.body.appendChild(div);
// });

// document.body.appendChild(button);

// 버튼을 3가지 만들고, 각각 이름은 사이트 색깔 이름 넣기
// div: 100px 100px bg: black
// 각각 클릭을 하면, 위의 div태그의 bg가 클릭한 이름의 색깔로 변경됨

// const button1 = document.createElement("button");
// const button2 = document.createElement("button");
// const button3 = document.createElement("button");

// button1.innerText = "mint";

// button2.innerText = "red";

// button3.innerText = "purple";

// const div = document.createElement("div");
// button1.style.backgroundColor = "black";
// button1.style.width = "100px";
// button1.style.height = "100px";

// button1.addEventListener("click", () => {
//   div.style.backgroundColor = "#1abc9c";
// });
// button2.addEventListener("click", () => {
//   div.style.backgroundColor = "#c0392b";
// });
// button3.addEventListener("click", () => {
//   div.style.backgroundColor = "#8e44ad";
// });

// document.body.appendChild(button1);
// document.body.appendChild(button2);
// document.body.appendChild(button3);
// document.body.appendChild(div);

// div => w:100 h:100 border: 1px solid black bg: white
// button => 내용: 색깔 추가,
// button's event=> prompt로 물어봄 색깔 헥사코드 입력

// button[#123123]을 가진 색깔이 나타남 div의 bg가 변경됨

// const div = document.createElement("div");

// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black";
// div.style.backgroundColor = "white";
// document.body.appendChild(div);

// const addbtn = document.createElement("button");
// btn.innerText = "색깔 추가";

// addbtn.addEventListener("click", () => {
//   const hex = prompt("색깔 헥사코드 입력");
//   const btn = document.createElement("button");
//   btn.innerText = hex;
//   btn.addEventListener("click", () => {
//     div.style.backgroundColor = hex;
//   });
//   document.body.appendChild(btn);
// });

// document.body.appendChild(addbtn);
