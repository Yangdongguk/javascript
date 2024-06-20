// 화살표 함수

const plus100 = (x) => {
  return x + 100;
};
plus100(200); // 300
const plus100_ = (x) => x + 100;
// 2. 원소 3번째거 돌려주기
const getThird = (x) => x[2];
getThird(["a", "b", "c"]);
//3. 소문자화 시키고 😎붙히기
const lowerEmoji = (x) => x.toLowerCase() + "😎";
lowerEmoji("APPLE");
