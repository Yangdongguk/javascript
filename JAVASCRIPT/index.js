// const 변수이름 = 데이터[기본 + 참조]
// 기본 타입: 숫자, 문자
// 타입 변환

// -1. 숫자 타입
// const a = 7(숫자)
// const b = 3.14(숫자)
// const c = 35701274597124(숫자)

// -2. 문자 타입
// const d = '아메리카노'
// const e = "바닐라라떼"
// const f = `민트초콜렛`

// const g = `내 최애 음료는: ${e}`
// console.log(g)

// 프롬프트를 이용해서,
// 1. 당신의 mbti?
// 2. 당신의 최애 음식?
// alert으로 당신의 mbti는 ~~, 최애 음식 ~~ 이군요!

// const mbti = prompt("당신의 mbti는?");
// const food = prompt("당신의 최애 음식은?");

// alert(`당신의 mbti는 ${mbti}, 최애 음식은 ${food} 이군요!`);

// 오늘의 날짜는 무엇인가요?
// 오늘의 일정은 무엇인가요?
// 오늘의 날짜는 {}이고, {}을 하실 예정이시군요!

// const date = prompt("오늘의 날짜는?");
// const plan = prompt("오늘의 일정은?");

// alert(`오늘의 날짜는 ${date}이고, ${plan}을 하실 예정이시군요!`);

// 첫 번째 수 입력
// 두 번째 수 입력
// 두 수의 합은 ~~입니다.

// const firstNumber = prompt("첫 번째 수 입력");
// const secondNumber = prompt("두 번째 수 입력");

// const first = number(firstNumber);
// const second = number(secondNumber);

// alert(`두 수의 합은 ${first + second}입니다.`);

// 1. 몇 살이냐? -> 17
// html에 h1태그로된 2007년이시군요

// 2. 정사각형의 한 변의 길이 -> 10
// html에 정사각형의 넓이는 100입니다.

const age = prompt("몇 살이냐?");
const numAge = number(age);
const agetag = document.createElement("h1");
agetag.innerText = `${2025 - numAge}년생이군요;`;
document.body.appendChild(agetag);

const side = prompt("한 변의 길이");
const numside = number(side);
const widthtag = document.createElement("h1");
widthtag.innerText = `정사각형의 넓이는 ${numside * numside}`;
document.body.appendChild(widthtag);
