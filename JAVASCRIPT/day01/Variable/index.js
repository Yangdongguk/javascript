// 변수(variable): 데이터를 기억하는 공간, 닉네임
// const 이름 = 데이터 [기억 한 번만]
// let 이름 = 데이터 [기억 여러번]
// var 이름 = 데이터 [절대절대 쓰지말기]

// ex) const a = 100;
//     a = 200; [x]

// ex) let a = 100;
//     a = 200; [o]

// 인간: 연산[뇌] + 기억[뇌]
// 컴퓨터: 연산[CPU] + 기억[RAM]

// kakao.file[하드디스크]

// RAM[kakao/youtube/game/...] <=> CPU

// 변수 이름 문법
// 1. 예약어[키워드] 안됨! ex) const const
// 2. 특수문자 안됨 _(언더바) 빼고
// 3. 띄어쓰기 안됨 const mintchoco
// 4. 숫자로 시작안됨 ex) const 1a(x) a1(o)
// 5. 변수이름 중복 안됨

// 변수 이름 국룰
// 1. 의미있는 단어로 사용
// ex) const a(x), const button(x) white_button
// 2. 두 단어 합칠 때, 낙타표기법, 뱀표기법사용
//    - 낙타: milkCoffe
//    - 뱀: milk_coffe
// 3. 소문자로 시작하기

// 유저에게 내용과 색깔을 입력받고,
// html에 h1~h3태그 만들기

// const text = prompt("내용");
// const color = prompt("색깔");
// const h1tag = document.createElement("h1");
// const h2tag = document.createElement("h2");
// const h3tag = document.createElement("h3");

// h1tag.innerText = text;
// h1tag.style.color = color;
// document.body.appendChild(h1tag);
// h2tag.innerText = text;
// h2tag.style.color = color;
// document.body.appendChild(h2tag);
// h3tag.innerText = text;
// h3tag.style.color = color;
// document.body.appendChild(h3tag);

// 유저에게 만들고 싶은 태그 물어보고
// 원하는 안의 내용도 물어보고
// 원하는 폰트색깔 만들고,
// html에 만들기

// const width = prompt("넓이");
// const height = prompt("높이");
// const font_size = prompt("폰트 사이즈 예) large, medium, small");
// const font_color = prompt("폰트 색깔");

// const val1 = document.createElement("div");
// val1.style.width = width;
// val1.style.height = height;
// val1.style.fontSize = font_size;
// val1.style.color = font_color;
// document.body.appendChild(val1);
