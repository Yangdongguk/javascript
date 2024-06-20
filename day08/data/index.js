// const foods = document.querySelectorAll(".food");
// foods.forEach((v) => console.log(v.dataset.price));


setInterval(() => {
    const date = new Date();
    const dateTag = document.querySelector(".Hour");
    dateTag.innerText = date.toLocaleString();
  }, 1000);