var myMenu = document.querySelector(".menu");

myMenu.addEventListener("click", function menuSpreading() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    myMenu.classList.toggle("spreaded");
  }
});

window.addEventListener("resize", function () {
  let screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    myMenu.classList.remove("spreaded");
  }
});
