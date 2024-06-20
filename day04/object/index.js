// array, element, object

const book = {
  title: "자바스크립트는 누가 만들었냐",
  price: 24000,
  author: ["김철수", "홍길동"],
  publishedYear: {
    year: 2024,
    month: 5,
    day: 31,
  },
};

const JavaScript = {
  smallButtons: ["소득공제"],
  title: "자바스크립트는 왜 그 모양일까?",
  subTitle:
    "더글러스 크락포드가 알려주는 위험한 자바스크립트를 안전하게 사용하는 법",
  author: {
    real: "더글러스 크락포드",
    editor: "박수현",
  },
  publishedCompany: "인사이트(insight)",
  publishedYear: {
    year: 2020,
    month: 5,
    day: 25,
  },
  rate: 6,
  reviews: 1,
  saleIndex: 288,
};

// 데이터 가져오기
// 1. dot 연산자
console.log(JavaScript.title);
console.log(JavaScript.author.editor);

// bracket 연산자
console.log(JavaScript["title"]);
console.log(JavaScript["author"], ["editor"]);

// 데이터 추가
JavaScript.isBestSeller = true;

// 데이터 삭제
delete JavaScript.subTitle;

// 데이터 존재 유무
"title" in JavaScript; // true

JavaScript.keys(); // keys값들만 돌려주기
JavaScript.values(); // values값들만 돌려주기
