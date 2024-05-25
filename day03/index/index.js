const div = document.querySelector(".box");
div.classList.forEach((v) => {
  console.log(v);
});

div.classList.add("pretty");
div.classList.remove("large");
div.classList.contains("box");
div.classList.replace("box", "wrapper");
div.classList.toggle("large");
