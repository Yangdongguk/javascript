// const arr = [1, 3, 5, 7, 9];
// const fruits = [
//   "apple",
//   "banana",
//   "orange",
//   "kiwi",
//   "tomato",
//   "grapes",
//   "strawberry",
// ];
// // forEach, every, some, map

// // map(바꾸기)
// const a1 = arr.map((v) => v * 10);
// const a2 = arr.map((v) => v ** v);
// const a3 = arr.map((v) => (v < 6 ? v + 10 : v * 10));
// arr.map((v, i) => (i % 2 == 0 ? v * 2 : v * 3));
// const a5 = fruits.map((v) => (v.includes("a") ? v.toUpperCase() : v.length));

// // filter
// const b1 = arr.filter((v) => v > 5);
// const b2 = arr.filter((v, i) => i % 2 == 0);
// const b3 = fruits.filter((v) => v.length >= 6).map((v) => v.toUpperCase());

// const alpha = ["a", "b", "c", "d", "e", "f"];

// const b4 = fruits
//   .filter((v) => v.length == 6)
//   .every((v) => alpha.some((x) => v.includes(x)));

const c = Array(10);
const c1 = Array(10).fill(0);
const c2 = Array(10)
  .fill(0)
  .map((v, i) => i);
const c3 = Array(101)
  .fill(0)
  .map((v, i) => i)
  .filter((v) => v % 2);

// str -> array
const d = "americano".split("");
const d1 = Array.from("americano");
const d2 = [..."americano"];
const d3 = [..."americano"].filter((v) => v != "a");

// array -> str
const e = ["coffee", "cookie"].join("");
const e1 = ["coffee", "cookie"].toString();

// str <-> array
// "cccCCC" -> "CCCccc"
// "abCdEfghIJ" -> "ABcDeFGHij"

// const change = (word) =>
//   [...word]
//     .map((v) => (v == v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()))
//     .join("");

// // n k result
// // 10 3 [3, 6, 9]
// // 15 5 [5, 10, 15]

// const markeArr = (n, k) =>
//   Array(n).fill(0).map((v, i) => i + 1).filter((v) => v % k == 0)

const a = [1, 2, 3, 4, 5];
Array(100)
  .fill(0)
  .map((v, i) => i + 1)
  .reduce((acc, curr) => acc + curr);

const fruits1 = ["apple", "banana", "orange", "kiwi", "tomato"];

const result = fruits1
  .map((v) =>
    [...v].filter((v1) => ![..."aeiou"].some((v2) => v2 == v1)).join("")
  )
  .reduce((acc, cur) => acc + cur);
console.log(result);
