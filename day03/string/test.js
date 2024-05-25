const fruits = ["apple", "banana", "orange", "melon", "kiwi"];

// fruits.forEach((v) => {
//   console.log(`${v} a를 포함 ${v.includes("a") ? "포함" : "미포함"}`);
// });

// 6글자 이상이면 대문자화하고, 아니면 해당단어를 두번 반복한 단어로 표시
// ex) BANANA, appleapple

// fruits.forEach((v) => {
//   const six = v.length >= 6;
//   const result = six ? v.toUpperCase() : v.repeat(2);
//   console.log(result);
// });

// fruits.forEach((v) => {
//   console.log(v.toUpperCase().repeat(v.length));
// });
