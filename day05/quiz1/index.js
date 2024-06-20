import { data } from "./data.js";

//1. timezone이 europe인 데이터중에서
// -> phone, fullName, ipAdress

const a = data
  .filter(({ timeZone }) => timeZone.includes("Europe"))
  .map(({ phone, fullName, ipAdress }) => ({ phone, fullName, ipAdress }));
console.log(a);

//2. id가 짝수인 데이터 중에서
// timeZone[대륙]이랑 phone[-빼고] money[$를빼고]를 가져오기
const b = data
  .filter(({ id }) => !(id % 2))
  .map(({ timeZone, phone, money }) => {
    return {
      timeZone: timeZone.split("/")[0],
      phone: phone.replaceAll("-", ""),
      money: money.replace("$", ""),
    };
  });
console.log(b);

//3. America or Asia 중에서
// ipAdress[.을 지우고] fullName 앞이름[First name] creditcard변경후 가져오기
const c = data
  .filter(
    ({ timeZone }) => timeZone.includes("American") || timeZone.includes("Asia")
  )
  .map(({ ipAdress, fullName, creditCardType: creditcard }) => {
    return {
      ipAdress: ipAdress.replaceAll(".", ""),
      fullName: fullName.split(" ")[0],
      creditcard,
    };
  });
console.log(c);
//4. 달러가 25000~50000사이 데이터 와 timezone이 africa인 데이터 중에서
// timezone[수도만 가져오기] fullName 뒤이름[Family name] 가져오기
const d = data
  .filter(({ money, timeZone }) => {
    const numberMoney = Number(money.replace("$", ""));
    const isValidMoney = 25000 <= numberMoney && 50000 >= numberMoney;
    const isValidTimezone = timeZone.includes("Africa");
    return isValidMoney && isValidTimezone;
  })
  .map(({ timeZone, fullName }) => ({
    timeZone: timeZone.split("/")[1],
    fullName: fullName.split(" ")[1],
  }));
console.log(d);

//5. ipAdress[178.17.184.209] 뒷자리 세개의 수의 합이 15이하인 애들 데이터중에서
// timezone, fullname, money 가져오기
const e = data
  .filter(({ ipAdress }) => {
    const ipArr = [...ipAdress];
    const lastIndex = ipArr.findLastIndex((v) => v == ".");
    const sum = ipArr
      .splice(lastIndex + 1, ipArr.length)
      .map((v) => Number(v))
      .reduce((a, c) => a + c);
    return sum > 15;
  })
  .map(({ timeZone, fullName, money, ipAdress }) => ({
    timeZone,
    fullName,
    money,
    ipAdress,
  }));
console.log(e);
