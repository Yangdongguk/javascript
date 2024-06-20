const menu = [
  {
    coffeeName: "americano",
    coffeePrice: 1800,
    shot: 2,
    coffeeBean: "Arabica",
  },
  {
    coffeeName: "latte",
    coffeePrice: 2500,
    shot: 2,
    coffeeBean: "Arabica",
  },
  {
    coffeeName: "mocha",
    coffeePrice: 3500,
    shot: 2,
    coffeeBean: "Liberica",
  },
];

//1. 가격이 3000원 이하만 필터링하기

const a = menu.filter((v) => v.coffeePrice <= 3000);

//2. 대문자화 and + 1000
const a1 = menu.map((v) => {
  v.coffeeName = v.coffeeName.toUpperCase();
  v.coffeePrice += 1000;
  return v;
});

//3. 이름과 샷만 남기기
const a2 = menu.map((v) => ({
  coffeeName: v.coffeeName,
  shot: v.shot,
}));
console.log(a2);
