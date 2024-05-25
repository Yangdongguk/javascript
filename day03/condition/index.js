// condiditon[조건]

// const a = Number(prompt("숫자입력"));

// if (a > 0) {
//   alert("0보다 큽니다.");
// } else if (a == 0) {
//   alert("0입니다.");
// } else {
//   alert("0보다 작습니다.");
// }

// prompt로 영어점수를 입력 받고

// 90점이상 'a'
// 80점이상 'b'
// 70점이상 'c'
// 60점이상 'd'
// 그 이하 '나락'

// const eng = Number(prompt("영어점수입력"));

// if (eng > 90) {
//   alert("a");
// } else if (eng > 80) {
//   alert("b");
// } else if (eng > 70) {
//   alert("c");
// } else if (eng > 60) {
//   alert("d");
// } else {
//   alert("나락");
// }

// 유저에게 비밀번호 설정을 물어보고,

// const special = ["!", "#", "$"];

// [some] 이 중 하나라도 true면 true
// special.some((v) => {
//   return v == "$";
// });

// [some]의 반대
// special.every((v) => {
//   return v == "!";
// });

// 1. 비밀번호 길이가 8글자 이상이고    // 비밀번호가 짧습니다.
// 2. 특수문자 !,#,$가 하나 들어가야 하고   // 특수문자 !#$가 없습니다.
// 3. I로 시작하고, T로 끝나야 하고  // I와 T를 꼭 시작과 끝에 넣어야합니다.
// 위의 조건을 모두 통과하면 비밀번호 설정완료!

const secretNum = prompt("비밀번호");
const isLengthOver8 = secretNum.length >= 8;
const hasSpecialChar = ["!", "#", "$"].some((v) => {
  return secretNum.includes(v);
});
const isValidIT = secretNum.startsWith("I") && secretNum.endsWith("T");

if (!isLengthOver8) {
  alert("비밀번호가 짧습니다.");
} else if (!hasSpecialChar) {
  alert("특수문자 !#$가 포함되어있지 않습니다.");
} else if (!isValidIT) {
  alert("I와 T를 꼭 시작과 끝에 넣어야합니다.");
} else {
  alert("비밀번호 설정완료!");
}
