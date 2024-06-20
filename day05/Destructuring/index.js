// 배열 구조분해
const week = ["월", "화", "수", "목", "금"];
// const [monday, ...rest] = week; // 월, 나머지
// const [monday, tuesday, ...rest] = week;
// const [monday, rest] = week; //월,화

// 객체 구조분해
const kimbab = {
  name: "참치김밥",
  ingredients: ["참치", "김", "밥", "계란"],
  price: 4000,
  sidedish: {
    main: "김치",
    soup: "김찌",
  },
};
// 구조분해후 renaming
// const { name: kimbabName, price, ingredients, sidedish } = kimbab;
// const [tuna, ...rest] = kimbab.ingredients;
// const { soup: koreanSoup } = kimbab.sidedish;
// const { sidedish: {main,soup} } = kimbab;
// console.log(main);

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

users.forEach(({ name: EnglishName, age: KoreanAge }) =>
  console.log(`${EnglishName} and ${KoreanAge}`)
);

//2. [{name: "Alice", age: 25 },{ name: "Bob", age: 30 },{ name: "Charlie", age: 35 }]

const ori = users(({ name, age }) => {
  return { name: name, age: age };
});
const a = users.map(({ name, age }) => ({ name: name, age: age }));
const b = users.map(({ name, age }) => ({ name, age }));
const c = users.map(({ name, age }) => ({ english: name, old: age }));
const d = users.map(({ name: english, age: old }) => ({ english, old }));

const e = users.map(({ name, age, nation = "Korean" }) => ({
  name,
  age,
  nation,
}));
