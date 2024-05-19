// Operator[연산자]
// 산술 연산자
// 할당 연산자[=,  +=, -=, *=, **=, /=, %=]

let b = 4;
b += 5; // 9 [b = b + 5 ]
b -= 4; // 5 [b = b - 4]

// 비교 연산자: boolean으로 귀결됨
// >, <, <=, >=, ==[같다], !=[다르다]
// ===[타입까지 같다], !==[알아서 이해하셈]
const c = 5 > 3;

// 논리 연산자
// &&[and], ||[or], ![not]
// &&: 모두 true 일때 true
// ||: 하나라도 true 일때 true
const d = 5 > 0 && 3 > 0 && 0 == "0"; // true
const d1 = 5 > 0 && 3 > 0 && 0 === "0"; // false
const d2 = 5 > 0 || 3 > 0 || 0 === "0"; // true
const d3 = !true; // false
const d4 = !"happy"; // false
const d5 = !!"happy"; // true [암묵적 타입 캐스팅]

// 삼항 연산자
// 조건 ? A[조건이 성립이 되었을 때] : B[아닐때]
const height = Number(prompt("키"));
const e = height >= 140 ? "탑승 가능" : "불가능";

// ex6 이후 연산자
// 1. typeof
console.log(typeof true); // boolean
console.log(typeof e); // string

// 2. Nullish ??
const h = prompt("아무거나 입력");
console.log(h ?? "입력해 임마");
console.log("아메리카노" ?? "재고없음");
