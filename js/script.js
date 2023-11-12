var button = document.querySelector(".show-cat");
var cat = document.querySelector(".cat");

// console.log(button);
// console.log(cat);

// When user clicks on the button, function is triggered to show cat image
button.addEventListener("click", function () {
  cat.classList.add("show");
});
