// 함수: input[str,bool,element,array,function] -> output

function abc(x) {
  x();
  return 100;
}
function kim() {
  console.log(`김씨 안녕`);
}
abc(kim);

const getTen = () => 10;
const getOne = () => 1;
const abc = (x, y) => x() + y();
abc(getTen, getOne);

const arr = [1, 10, "apple", "banana", 3];
const test = (x) => {
  console.log(`${x}입니다.`);
};
arr.forEach(test);
arr.forEach((v) => {
  console.log(`${v}입니다.`);
});
