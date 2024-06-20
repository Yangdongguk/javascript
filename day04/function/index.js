// 함수: input[str,bool,element,null] -> output[str,bool,element,null]

function hello(x) {
  return `${x}안녕`;
}

// const a = hello("여누"); // 여누 안녕
// const b = hello("JavaScript");

// 1. x를 넣으면 + 100 돌려주는 함수
function ReturnPlusHundred(x) {
  return x + 100;
}

// 2. x를 넣으면 대문자화 시키고 + '😊' 돌려주는 함수
function UpperEmoji(x) {
  return x.toUpperCase() + "😊";
}

const c = ReturnPlusHundred(300); // 400
const d = UpperEmoji("apple"); // APPLE😊
console.log(c, d);

// 3. 배열 x를 넣으면 두번째 원소를 돌려주기
function getSecond(x) {
  return x[1];
}

// 4. x를 넣으면 + 😆을 붙여서 돌려주기
function wonyoungThink(x) {
  return x + "😆";
}

const e = getSecond(["apple", "banana"]);
const f = wonyoungThink("금요일인데 공부함 ㅋㅋㅋ");
console.log(e, f);
