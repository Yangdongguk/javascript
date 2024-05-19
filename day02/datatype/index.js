// const 변수이름 = 데이터[타입: 기본 + 참조]
// 기본 타입: number, string, boolean(True or False), null(비어있음), undefined(정의되지않음)

// 타입 변환
// 1] 명시적 타입 변환 [대놓고]
// 2] 암묵적 타입 변환 [몰래]

// 숫자화
// 1. number("1004") [명시적]
// 2. parseInt("1004"), parstFloat("3.14") [명시적]
// parse 해석하다, Int 정수, Float 실수
//  - 숫자가 아닌 문자를 만나면 그 즉시 해석 안함
// 3. (+) [암묵적]

// 문자화
// 1. String(123) [명시적]
// 2. something + "문자" + something [암묵적]

// 불리언화
// 1. boolean() // true or false

// truthy & falsy data
// true: 나머지 다 트루
// false: 0, -0, "", null, undefined, NaN
