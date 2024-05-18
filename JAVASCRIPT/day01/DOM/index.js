// js가 html을 만들기 위한 장소

// h1 태그 만들기
// const h1tag = document.createElement("h1");
// h1tag.innerText = "자바스크립트 수업중";
// document.body.appendChild(h1tag);

// 버튼을 만들고, 안의 내용은 클릭! body에 나타내기
// const buttontag = document.createElement("button");
// buttontag.style.backgroundColor = "white";
// buttontag.style.padding = "10px";
// buttontag.style.fontSize = "20px";
// buttontag.innerText = "클릭!";
// document.body.appendChild(buttontag);

// const a = prompt("점심 뭐먹을거냐?");
// console.log(a);

// prompt로 배경색깔을 물어보고 헥사코드,
// ex) red, #ffefed
// div -> width: 100px, height: 100px, background: red

// const color = prompt("배경색깔");
// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = color;
// document.body.appendChild(box);

// 폰트 색깔 물어보고
// 버튼 안에 들어갈 내용 물어보고
// 버튼을 html에 보여주기

// const background = prompt("버튼 배경색");
// const fontcolor = prompt("폰트 색깔");
// const text = prompt("버튼 안 내용");

// const button = document.createElement("button");
// button.style.color = fontcolor;
// button.innerText = text;
// button.style.backgroundColor = background;
// document.body.appendChild(button);

// 높이 물어보기 주의)100px
// 넓이 물어보기
// 배경색 물어보기
// 안에 들어갈 내용 물어보기
// div태그로 위의 내용을 고려해서 나타내기

const height = prompt("높이");
const width = prompt("넓이");
const backgroundColor = prompt("배경색");
const text = prompt("내용");
const box = document.createElement("div");
box.style.height = height;
box.style.width = width;
box.style.backgroundColor = backgroundColor;
box.innerText = text;
document.body.appendChild(box);
