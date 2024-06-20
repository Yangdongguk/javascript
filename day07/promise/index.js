// 비동기
// Array, Object, Element, Date
//Promise: 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타냄
//Promise에서는 상태가 3가지: 대기중[pending], 성공[fulfilled], 실패[Rejected]

// const a = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("탕후루");
//   }, 3000);
// });
// a.then((v) => console.log(v));

const b = new Promise((success, fail) => {
  setTimeout(() => {
    success({ name: "americano", price: 3000 });
  }, 1000);
});
b.then((v) => {
  v.name = v.name.toUpperCase();
  return v;
})
  .then((v) => {
    v.price *= 2;
    return v;
  })
  .then((v) => {
    console.log(v);
  });
