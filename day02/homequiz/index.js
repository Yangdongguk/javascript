const coffee = document.querySelector(".coffee--button");
const latte = document.querySelector("latte--button");
const vanilla = document.querySelector("vanilla--button");
const total = document.querySelector(".extended_price");

total.innerText = `0`;

coffee.addEventListener("click", () => {
  total.innerText = total + 3000;
});
